/* eslint-disable react/prop-types */
import styles from './ProfileDescription.module.css'

const ProfileDescription = ({data}) => {
  return (
    <>
      <div className={styles.container}>
        <h2>{data.userData.name}</h2>
        <div className={styles.paragraph}>{data.userData.bio}</div>
      </div>
    </>
  );
};

export default ProfileDescription;
