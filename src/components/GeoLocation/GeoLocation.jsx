/* eslint-disable react/prop-types */
import styles from "./GeoLocation.module.css";

const GeoLocation = ({ data }) => {
  const city = data.city;
  const lonFactorX = (data.lon / 360) * 100;
  const latFactorY = (data.lat / 180) * 100;

  const xStart = `${50 + lonFactorX}%`;
  const yStart = `${50 - latFactorY}%`;

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
