/* eslint-disable react/prop-types */
import styles from "./TimeLine.module.css";

const TimeLine = ({ data }) => {

  const dob = `Born: ${data.dob.slice(0, 4)}`;
  const registered = `Registered:  ${data.registered.slice(0, 4)}`;
  const currentDayString = "Today";
  const birthTime = new Date(dob).getTime();
  const registeredTime = new Date(registered).getTime();
  const currentTime = new Date().getTime();

  const widthTotal = 300;
  const currentLength = currentTime - birthTime;
  const regX = ((registeredTime - birthTime) / currentLength) * 100;
  const finalRegX = (widthTotal * regX) / 100;
  const pathD = `M 50 50 ${widthTotal} 50`;

  return (
      <svg width={`${widthTotal + 30}`} height="100px" className={styles.timeLineSvg}>
        <path
          id="line"
          d={pathD}
          stroke="blue"
          strokeWidth="2"
          fill="transparent"
        />
        <circle cx="50" cy="50" r="5" fill="blue" />
        <text x="5" y="30" r="5" fill="blue">
          {dob}
        </text>

        <circle cx={`${finalRegX}`} cy="50" r="5" fill="red" />
        <text x={`${finalRegX - 60}`} y="70" r="5" fill="blue">
          {registered}
        </text>

        <circle cx={widthTotal} cy="50" r="5" fill="blue" />
        <text x={`${widthTotal - 20}`} y="30" r="5" fill="blue">
          {currentDayString}
        </text>
      </svg>
  );
};

export default TimeLine;
