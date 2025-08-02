import { useState } from "react";
import CircleProgressBar from "./children/CircleProgressBar";
import './ProgressCircular.css';


const ProgressCircular = () => {
  const [percentage, setPercentage] = useState(35);

  return (
    <div className="progress-circular">
      <CircleProgressBar percentage={ percentage } circleWidth="200" />
      <input
        type="range"
        min={ 1 }
        max="100"
        step={ 1 }
        value={ percentage }
        className="progressInput"
        onChange={ (e) => setPercentage(e.target.value) }
      />
    </div>
  );
};

// const Progress = styled.div`

// 	height: 30vh;
// 	padding: 2rem;
//   border: 1px solid black;

// 	.progressInput {
// 		width: 30vw;
// 		margin-top: 30px;
// 		height: 10px;
// 		-webkit-appearance: none;
// 		background-image: linear-gradient(
// 			to right,
// 			#12c2e9,
//       #c471ed,
//       #f64f59
// 		);
// 		border-radius: 5px;
// 	}

// 	.progressInput::-webkit-slider-thumb {
// 		-webkit-appearance: none;
// 		width: 30px;
// 		height: 30px;
// 		border-radius: 50%;
// 		background-color: #111;
// 		cursor: pointer;
// 		box-shadow: 1px 1px 4px 3px rgba(85, 85, 85, 0.6);
// 	}
// `;

export default ProgressCircular;
// https://www.youtube.com/watch?v=H1W_SeoouAI
