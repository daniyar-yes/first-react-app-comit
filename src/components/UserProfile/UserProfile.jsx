/* eslint-disable react/prop-types */
import styles from "./UserProfile.module.css";

const UserProfile = ({ data, isLoading, error }) => {

    if (isLoading || data === null) {
       return <div className={styles.loadingSpinner}></div>
    }

    if (error) {
        return <p>Sorry, error message says: {error}</p>
    }

  const fullName = `${data?.name?.title}. ${data?.name?.first} ${data?.name?.last}`;
  const age = `Age: ${data?.age}`;

  return (
    <>
      <div className={styles.container}>
        <img
          src={data?.imgSrc.large}
          alt={`Profile picture of ${fullName}`}
          className={styles.userImage}
        />
        <div className={styles.textContainer}>
          <p>{fullName}</p>
          <p>{age}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
