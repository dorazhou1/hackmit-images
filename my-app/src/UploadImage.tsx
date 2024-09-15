import { useMutation, useQuery } from "convex/react";
import { ChangeEvent, useState } from "react";
import { api } from "../convex/_generated/api";

export function UploadImage() {
  const [imageName, setImageName] = useState<string | null>(null); // Allow null to handle initial state
  const [imageData, setImageData] = useState<string | null>(null);

  const uploadImage = useMutation(api.images.upload);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Set the imageName to the selected file's name
    setImageName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImageData(base64String); // Set the Base64 string
    };
    reader.readAsDataURL(file); // Convert image to Base64
  };

  const handleSubmit = async () => {
    console.log("button pressed");
    console.log(imageName);
    if (imageName && imageData) {
      console.log("valid image");
      const category = "food";
      const type = "real";
      await uploadImage({ imageName, imageData, category, type });
      alert("Image uploaded!");
    } else {
      alert("Please select an image.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload Image</button>
    </div>
  );
}

export function RetrieveImage({ imageName }: { imageName: string }) {
  const image = useQuery(api.images.get_by_name, { name: imageName });

  return (
    <>
      <div>
        {image ? (
          <img src={image.data} alt={image.name} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    </>
  );
}
