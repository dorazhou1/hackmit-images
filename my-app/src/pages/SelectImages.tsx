import './style/selectimages.css'
import ProgressBar from '../components/ui/pointsbar';
import { Image } from '@/components/Image';
export function SelectImages() {
  return (
    <>
      <div style={{ backgroundColor: "#a7e4fa", backgroundImage: "url(./bubbles.png)", height: "100vh", padding: "10%"}}>
        <div className="title">choose the <span className="bubblefont">REAL</span> image</div>
        <ProgressBar progress={15}/>
        <img src='images/people/african-american-woman-smiling-portrait_1303-12373.jpg'></img>
      </div>
    </>
  );
}
