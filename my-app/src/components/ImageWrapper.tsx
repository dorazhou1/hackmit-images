import { Image } from "@/components/Image";

export function ImageWrapper({
  imageID,
  answer,
}: {
  imageID: string;
  answer: string;
}) {
  return (
    <div className="im">
      <Image imageID={imageID} />
    </div>
  );
}
