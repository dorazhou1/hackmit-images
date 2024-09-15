import { ReactNode } from "react";
// component for displaying an image during the game
import { UploadImage } from "@/UploadImage";

export function ImagePage() {
  return (
    <>
      <UploadImage />
      <div>This is a test to see if the image page can work!</div>
    </>
  );
}
