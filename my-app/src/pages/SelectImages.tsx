import "./style/selectimages.css";
import ProgressBar from "../components/ui/pointsbar";
import { Image } from "@/components/Image";
import { ImageWrapper } from "@/components/ImageWrapper";
import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function SelectImages() {
  // Mock images list for demonstration
  const imagePairs = [
    {
      real: "girl-smiling-flowers.jpg",
      fake: "output_girl-smiling-flowers.jpg.png",
    },
    {
      real: "african-american-woman-smiling-portrait_1303-12373.jpg",
      fake: "output_african-american-woman-smiling-portrait_1303-12373.jpg.png",
    },
    {
      real: "african-man-posing-green-shirt.jpg",
      fake: "output_african-man-posing-green-shirt.jpg.png",
    },
    {
      real: "man-south-asian-green-shirt.jpg",
      fake: "output_man-south-asian-green-shirt.jpg.png",
    },
    {
      real: "elderly-man-with-glasses.jpg",
      fake: "output_elderly-man-with-glasses.jpg.png",
    },
  ];

  const [counter, setCounter] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [shuffledImages, setShuffledImages] = useState<[string, string] | null>(
    null,
  ); // State for shuffled images

  const location = useLocation();
  const navigate = useNavigate();

  const { imageCount } = location.state || {};

  const maxImages = imageCount;

  console.log(maxImages);

  // Shuffle images whenever counter changes
  useEffect(() => {
    const currentImagePair = imagePairs[counter];

    // Randomly decide whether to show the real image first or second
    const randomOrder = Math.random() > 0.5;
    const newShuffledImages = randomOrder
      ? [currentImagePair.real, currentImagePair.fake]
      : [currentImagePair.fake, currentImagePair.real];

    setShuffledImages(newShuffledImages);
  }, [counter]);

  const handleNextClick = () => {
    // Only increment if the counter is below the maximum limit
    if (counter < maxImages) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      navigate("/youwon", { state: { score: score } });
    }
  };

  const handleClick = (event) => {
    const answer = event.currentTarget.getAttribute("answer");
    if (answer === "real") {
      alert("That's correct");
      setScore(score + 1);
    } else if (answer === "fake") {
      alert("That's incorrect");
    }
    if (counter < maxImages) {
      setCounter((prevCounter) => prevCounter + 1);
      // go to next image
    } else {
      navigate("/youwon", { state: { score: score } });
    }
  };

  if (!shuffledImages) return null;

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
        <ProgressBar progress={(counter / maxImages) * 100} />
        <div>
          Score: {score} / {maxImages}
        </div>
        <div className="images-fishy">
          <div
            onClick={handleClick}
            answer={
              shuffledImages[0] === imagePairs[counter].real ? "real" : "fake"
            }
          >
            <ImageWrapper
              answer={
                shuffledImages[0] === imagePairs[counter].real ? "real" : "fake"
              }
              imageID={shuffledImages[0]}
            />
          </div>
          <div
            onClick={handleClick}
            answer={
              shuffledImages[1] === imagePairs[counter].real ? "real" : "fake"
            }
          >
            <ImageWrapper
              answer={
                shuffledImages[1] === imagePairs[counter].real ? "real" : "fake"
              }
              imageID={shuffledImages[1]}
            />
          </div>
        </div>
        {/* <button onClick={handleNextClick} disabled={counter >= maxImages}>
          {counter >= maxImages ? "No More Clicks" : "Next"}
        </button> */}
      </div>
    </>
  );
}
