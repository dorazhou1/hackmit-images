import '../styles/ProgressBar.css'; // Optional: For styling

const ProgressBar = ({ progress } : { progress : number}) => {
  // Ensure the progress is between 1 and 100
  const normalizedProgress = Math.min(Math.max(progress, 1), 100);
  console.log('hi')
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${normalizedProgress}%` }}
      >
        {normalizedProgress}%
      </div>
      <img className='fishy' src='fish.png' width='100px' style={{zIndex: 100}}></img>
    </div>
  );
};

export default ProgressBar;
