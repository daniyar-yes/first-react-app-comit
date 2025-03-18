/* eslint-disable react/prop-types */
import styles from "./UserProfile.module.css";
import RandomText from "../shared/RandomText/RandomText";

const UserProfile = ({ data, textContent, buttonText }) => {
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
      <RandomText textContent={textContent} buttonText={buttonText}/>


    </>
  );
};

export default UserProfile;
