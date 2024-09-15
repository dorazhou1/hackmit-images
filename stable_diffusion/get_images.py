from os import listdir

from pathlib import Path

def get_images(dir):
    return [f for f in listdir(Path(__file__).parent / dir)]
# folder = Path(__file__).parent / "demo_images/nature"
# print(get_images(folder))
images = get_images("demo_images/people")
print(images)
image = images[0]
print(image)
desc = ' '.join(image.split('_')[0].split('.')[0].split('-'))
print(desc)
