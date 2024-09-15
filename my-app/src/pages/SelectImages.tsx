import "./style/selectimages.css";
import ProgressBar from "../components/ui/pointsbar";
import { Image } from "@/components/Image";
import { ImageWrapper } from "@/components/ImageWrapper";
export function SelectImages() {
  const handleClick = (event) => {
    const answer = event.currentTarget.getAttribute("answer");
    if (answer === "real") {
      alert("That's correct");
    } else if (answer === "fake") {
      alert("That's incorrect");
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#a7e4fa",
          backgroundImage: "url(./bubbles.png)",
          height: "max(100%, 100vh)",
          padding: "10%",
        }}
      >
        <div className="title">
          choose the <span className="bubblefont">REAL</span> image
        </div>
        <ProgressBar progress={15} />
        <div className="images-fishy">
          <div onClick={handleClick} answer="real">
            <ImageWrapper answer="real" imageID="girl-smiling-flowers.jpg" />
          </div>
          <div onClick={handleClick} answer="fake">
            <ImageWrapper
              answer="fake"
              imageID="output_girl-smiling-flowers.jpg.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
