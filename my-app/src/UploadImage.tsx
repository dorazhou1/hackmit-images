import { useMutation } from "convex/react";
import { ChangeEvent, useState } from "react";
import { api } from "../convex/_generated/api";

export function UploadImage() {
  const [imageName, setImageName] = useState("");
  const [imageData, setImageData] = useState<string | null>(null);

  const uploadImage = useMutation(api.images.upload);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImageData(base64String);
    };
    reader.readAsDataURL(file); // Convert image to Base64
  };

  const handleSubmit = async () => {
    if (imageName && imageData) {
      await uploadImage({ imageName, imageData });
      alert("Image uploaded!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload Image</button>
    </div>
  );
}
