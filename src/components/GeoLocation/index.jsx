/* eslint-disable react/prop-types */
import styles from "./GeoLocation.module.css";

const GeoLocation = ({ data, isLoading, error }) => {

    if (isLoading || data === null) {
       return <div className={styles.loadingSpinner}></div>
    }

    if (error) {
        return <p>Sorry, error message says: {error}</p>
    }


  return (
    <>
      Hi Geo
    </>
  );
};

export default GeoLocation;
