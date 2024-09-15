# ---
# output-directory: "/tmp/stable-diffusion-xl-turbo"
# args: []
# runtimes: ["runc", "gvisor"]
# ---
# # Stable Diffusion XL Turbo Image-to-image
#
# This example is similar to the [Stable Diffusion XL](/docs/examples/stable_diffusion_xl)
# example, but it's a distilled model trained for real-time synthesis and is image-to-image. Learn more about it [here](https://stability.ai/news/stability-ai-sdxl-turbo).
#
# Input prompt:
# `dog wizard, gandalf, lord of the rings, detailed, fantasy, cute, adorable, Pixar, Disney, 8k`
#
# Input             |  Output
# :-------------------------:|:-------------------------:
# ![](./stable_diffusion_turbo_input.png)  |  ![](./stable_diffusion_turbo_output.png)

# ## Basic setup

from io import BytesIO
from pathlib import Path
from os import listdir

import modal

# from get_images import get_images

# ## Define a container image


image = modal.Image.debian_slim().pip_install(
    "Pillow~=10.1.0",
    "diffusers~=0.24.0",
    "transformers~=4.35.2",  # This is needed for `import torch`
    "accelerate~=0.25.0",  # Allows `device_map="auto"``, which allows computation of optimized device_map
    "safetensors~=0.4.1",  # Enables safetensor format as opposed to using unsafe pickle format
)

app = modal.App("stable-diffusion-xl-turbo", image=image)

with image.imports():
    import torch
    from diffusers import AutoPipelineForImage2Image
    from diffusers.utils import load_image
    from huggingface_hub import snapshot_download
    from PIL import Image


# ## Load model and run inference
#
# The container lifecycle [`@enter` decorator](https://modal.com/docs/guide/lifecycle-functions#container-lifecycle-beta)
# loads the model at startup. Then, we evaluate it in the `inference` function.
#
# To avoid excessive cold-starts, we set the idle timeout to 240 seconds, meaning once a GPU has loaded the model it will stay
# online for 4 minutes before spinning down. This can be adjusted for cost/experience trade-offs.


@app.cls(gpu=modal.gpu.A10G(), container_idle_timeout=240)
class Model:
    @modal.build()
    def download_models(self):
        # Ignore files that we don't need to speed up download time.
        ignore = [
            "*.bin",
            "*.onnx_data",
            "*/diffusion_pytorch_model.safetensors",
        ]

        snapshot_download("stabilityai/sdxl-turbo", ignore_patterns=ignore)

    @modal.enter()
    def enter(self):
        self.pipe = AutoPipelineForImage2Image.from_pretrained(
            "stabilityai/sdxl-turbo",
            torch_dtype=torch.float16,
            variant="fp16",
            device_map="auto",
        )

    @modal.method()
    def inference(self, image_bytes, prompt):
        init_image = load_image(Image.open(BytesIO(image_bytes))).resize(
            (512, 512)
        )
        num_inference_steps = 4
        strength = 0.9
        # "When using SDXL-Turbo for image-to-image generation, make sure that num_inference_steps * strength is larger or equal to 1"
        # See: https://huggingface.co/stabilityai/sdxl-turbo
        assert num_inference_steps * strength >= 1

        image = self.pipe(
            prompt,
            image=init_image,
            num_inference_steps=num_inference_steps,
            strength=strength,
            guidance_scale=0.0,
        ).images[0]

        byte_stream = BytesIO()
        image.save(byte_stream, format="PNG")
        image_bytes = byte_stream.getvalue()

        return image_bytes

# image = "river-surrounded-by-forests-cloudy-sky-thuringia-germany.jpg"
images = {}
images['nature'] = ['beautiful-scenery-mesas-landscape-bryce-canyon-national-park-utah-usa_181624-41945.avif', 'beautiful-shot-little-river-forest_181624-1520.jpg', 'lac-du-pontet-alps_181624-25842.avif', 'morning-light-sonoran-desert-scottsdale-arizona_181624-48339.avif', 'mount-mont-blanc-covered-snow-reflecting-water-evening-chamonix-france_181624-33408.avif', 'pier-lake-hallstatt-austria_181624-44201.avif', 'river-surrounded-by-forests-cloudy-sky-thuringia-germany.jpg']
# images = get_images("demo_images/nature")
images['food'] = ['close-up-fork-with-bowl-fruit_23-2148233265.jpg', 'closeup-delicious-cooked-rice-with-vegetables-sauce-plate-table_181624-34969.jpg', 'cookies-ice-cream-arrangement-high-angle_23-2149836001.jpg', 'delicious-tacos-basket-high-angle_23-2148629319.jpg', 'fast-food-concept-with-american-flag_23-2147695719.jpg', 'still-life-delicious-american-hamburger_23-2149637320.jpg', 'stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-10786.jpg']
images['people'] = ['african-american-woman-smiling-portrait_1303-12373.jpg', 'african-man-posing-green-shirt.jpg', 'african-woman-black-and-white-shirt.jpg', 'asian-woman-plaid-shirt.jpg', 'elderly-man-with-glasses.jpg', 'girl-smiling-flowers.jpg', 'man-south-asian-green-shirt.jpg', 'pensive-woman-architect-working-home_273609-20496.jpg', 'person-indian-origin-having-fun_23-2150285283.jpg', 'woman-smiling-wearing-hijab.jpg', 'woman-with-camera.jpg', 'young-bearded-man-with-striped-shirt_273609-5677.jpg']
images['animals'] = ['cat.jpg', 'dog.png']

@app.local_entrypoint()
def main(category='food'
):
    for image in images[category]:
        image_path = Path(__file__).parent / "demo_images" / category / image
        desc = ' '.join(image.split('_')[0].split('.')[0].split('-'))
        with open(image_path, "rb") as image_file:
            input_image_bytes = image_file.read()
            output_image_bytes = Model().inference.remote(input_image_bytes, desc+", 8k")

        dir = Path(__file__).parent / "output_images"
        if not dir.exists():
            dir.mkdir(exist_ok=True, parents=True)

        output_path = dir / ("output_"+ image + ".png")
        print(f"Saving it to {output_path}")
        with open(output_path, "wb") as f:
            f.write(output_image_bytes)

# ## Running the model
#
# We can run the model with different parameters using the following command,
# ```
# modal run stable_diffusion_xl_turbo.py --prompt="harry potter, glasses, wizard" --image-path="dog.png"
# ```
