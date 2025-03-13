/* eslint-disable react/prop-types */
import styles from "./GeoLocation.module.css";

const GeoLocation = ({ data, isLoading, error }) => {
  if (isLoading || data === null) {
    return <div className={styles.loadingSpinner}></div>;
  }

  if (error) {
    return <p>Sorry, error message says: {error}</p>;
  }

  const city = data.city;
  const lonFactorX = (data.lon / 360) * 100;
  const latFactorY = (data.lat / 180) * 100;

  const xStart = `${50 + lonFactorX}%`;
  const yStart = `${50 - latFactorY}%`;

  // Todo: calculate position of a pin in PX
  // const pinTopOffsetY = `120px`;
  // const pinLeftOffsetX = '351px';

  return (
    <div>
      <div className={styles.visualsContainer}>
        <img src="./src/assets/map.gif" alt="map" className={styles.mapImg} />
        <svg className={styles.mapSvg}>
          <circle
            cx={xStart}
            cy={yStart}
            r="3"
            fill="yellow"
            stroke="green"
            strokeWidth="2"
          />
        </svg>
        {/* <span className={styles.pin} style={{top: pinTopOffsetY, left: pinLeftOffsetX}}>📍</span> */}
      </div>
      <div className={styles.mapLegend}>
      <div>
          <p>North: {data.lat}°</p>
          <p>East: {data.lon}°</p>
        </div>
        <p>📍City: {city}</p>
      
      </div>
    </div>
  );
};

export default GeoLocation;
