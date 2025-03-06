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

  return (
    <>
      <div className={styles.container}>
        <span>{dob}</span>
        <span>{registered}</span>
        <span>{formattedCurrentDate}</span>
      </div>
    </>
  );
};

export default TimeLine;
