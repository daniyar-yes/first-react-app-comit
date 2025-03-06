/* eslint-disable react/prop-types */
import styles from "./TimeLine.module.css";

const TimeLine = ({ data, isLoading, error }) => {

    if (isLoading || data === null) {
       return <div className={styles.loadingSpinner}></div>
    }

    if (error) {
        return <p>Sorry, error message says: {error}</p>
    }


  return (
    <>
      hi Time
    </>
  );
};

export default TimeLine;
