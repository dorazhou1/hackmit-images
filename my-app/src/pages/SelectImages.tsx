import './style/selectimages.css'
import ProgressBar from '../components/ui/pointsbar';
import { Image } from '@/components/Image';
import { ImageWrapper } from '@/components/ImageWrapper';
export function SelectImages() {
  return (
    <>
      <div style={{ backgroundColor: "#a7e4fa", backgroundImage: "url(./bubbles.png)", height: "max(100%, 100vh)", padding: "10%"}}>
        <div className="title">choose the <span className="bubblefont">REAL</span> image</div>
        <ProgressBar progress={15}/>
        <div className="images-fishy">
        <ImageWrapper imageID='girl-smiling-flowers.jpg'/>
        <ImageWrapper imageID="output_girl-smiling-flowers.jpg.png"/>
        </div>
        
      </div>
    </>
  );
}
