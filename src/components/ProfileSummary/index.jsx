/* eslint-disable react/prop-types */
import ProfileDescription from "../ProfileDescription";
import styles from './ProfileSummary.module.css'

const ProfileSummary = ({ data }) => {
  return (
    <section className={styles.container}>
      {data?.imageData ? (
        <div className="picture">
          <img src={data?.imageData?.imgSrc} alt={data?.imageData?.alt} />
        </div>
      ) : (
        <p style={{ border: "3px solid pink" }}>Imagedata is missing</p>
      )}
      <ProfileDescription data={data} />
    </section>
  );
};

export default ProfileSummary;
