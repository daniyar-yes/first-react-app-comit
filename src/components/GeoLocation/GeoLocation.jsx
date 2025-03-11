/* eslint-disable react/prop-types */
import styles from "./GeoLocation.module.css";

const GeoLocation = ({ data, isLoading, error }) => {
  if (isLoading || data === null) {
    return <div className={styles.loadingSpinner}></div>;
  }

  if (error) {
    return <p>Sorry, error message says: {error}</p>;
  }
console.log(data);
  return (
  <div>
    <p>{data.lat}</p>
    <p>{data.lon}</p>
    <div className={styles.visualsContainer}>
    <img src="./src/assets/map.gif" alt="map" className={styles.mapImg}/>
    <svg className={styles.mapSvg}>
        <circle cx="0" cy="0" r="5" fill="blue" />
    </svg>
      </div>
  </div>
  )
};

export default GeoLocation;
