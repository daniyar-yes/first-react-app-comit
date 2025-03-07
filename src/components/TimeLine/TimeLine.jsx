/* eslint-disable react/prop-types */
import styles from "./TimeLine.module.css";

const TimeLine = ({ data, isLoading, error }) => {
  if (isLoading || data === null) {
    return <div className={styles.loadingSpinner}></div>;
  }

  if (error) {
    return <p>Sorry, error message says: {error}</p>;
  }

  console.log(data.dob.slice(0, 10));
  const dob = data.dob.slice(0, 10);
  const registered = data.registered.slice(0, 10);
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  const birthTime = new Date(dob).getTime();
  const registeredTime = new Date(registered).getTime();
  const currentTime = new Date().getTime();

  const widthTotal = 300;

  const currentLength = currentTime - birthTime;

  const regX = ((registeredTime - birthTime) / currentLength * 100);

  const finalRegX = (widthTotal * regX) / 100;



  const pathD = `M 50 50 ${widthTotal} 50`
  return (
    <>
      <svg width={`${widthTotal+30}`} height="100px" style={{ border: "3px dashed green" }}>
        <path
          id="line"
          d={pathD}
          stroke="blue"
          strokeWidth="2"
          fill="transparent"
        />
        <circle cx="50" cy="50" r="5" fill="blue"/>
        <text x="5" y="30" r="5" fill="blue">{dob}</text>

        <circle cx={`${finalRegX}`} cy="50" r="5" fill="red"/>
        <text x={`${finalRegX-40}`} y="70" r="5" fill="blue">{registered}</text>

        <circle cx={widthTotal} cy="50" r="5" fill="blue"/>
        <text x={`${widthTotal-50}`} y="30" r="5" fill="blue">{formattedCurrentDate}</text>

      </svg>
    </>
  );
};

export default TimeLine;
