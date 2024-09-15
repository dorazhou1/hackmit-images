import { ReactNode, useState } from "react";
// component for displaying an image during the game
import { UploadImage, RetrieveImage } from "@/UploadImage";

export function ImagePage() {
  return (
    <>
      <UploadImage />
      <RetrieveImage imageName="test" />
    </>
  );
}
