import { ReactNode } from "react";
import { RetrieveImage } from "@/UploadImage";
// component for displaying an image during the game

export function Image({ imageID }: { imageID: string }) {
  return (
    <>
      <div>
        This is a test to see if the Image component can work!
        <RetrieveImage imageName="girl-smiling-flowers.jpg" />
      </div>
    </>
  );
}
