import PropTypes from 'prop-types';
import '../ProgressCircular.css';

const CircleProgressBar = ({ percentage, circleWidth }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="circle">
      <svg
        width={ circleWidth }
        height={ circleWidth }
        viewBox={ `0 0 ${circleWidth} ${circleWidth}` }
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#12c2e9" />
            <stop offset="50%" stopColor="#c471ed" />
            <stop offset="100%" stopColor="#f64f59" />
          </linearGradient>
        </defs>

        <circle
          cx={ circleWidth / 2 }
          cy={ circleWidth / 2 }
          strokeWidth="15px"
          r={ radius }
          className="circle-background"
        />

        <circle
          cx={ circleWidth / 2 }
          cy={ circleWidth / 2 }
          strokeWidth="15px"
          r={ radius }
          className="circle-progress"
          style={ {
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          } }
          transform={ `rotate(-90 ${circleWidth / 2} ${circleWidth / 2} )` }
          stroke="url(#gradient)"
        />

        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fill="url(#gradient)"
          className="circle-text"
        >
          { percentage }%
        </text>
      </svg>
    </div>
  );
};

CircleProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  circleWidth: PropTypes.string.isRequired,
};

export default CircleProgressBar;
