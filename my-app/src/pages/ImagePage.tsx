import { ReactNode } from "react";
// component for displaying an image during the game
import { UploadImage, RetrieveImage } from "@/UploadImage";

export function ImagePage() {
  return (
    <>
      <UploadImage />
      <RetrieveImage imageName="test" />
      <div>This is a test to see if the image page can work!</div>
    </>
  );
}
