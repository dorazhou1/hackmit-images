import { ReactNode } from "react";
import { RetrieveImage } from "@/UploadImage";
// component for displaying an image during the game

export function Image({ imageID }: { imageID: string }) {
  return (
    <>
      <div>
        <RetrieveImage imageName={imageID} />
      </div>
    </>
  );
}
