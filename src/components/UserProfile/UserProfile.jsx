/* eslint-disable react/prop-types */
import styles from "./UserProfile.module.css";

const UserProfile = ({ data }) => {
  const default_img =
    "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";

  const dataToShow = data
    ? data
    : {
        name: {
          first: "",
          last: "",
          title: "",
        },
        id: "",
        age: "",
        imgSrc: {
          large: default_img,
          medium: default_img,
          thumbnail: default_img,
        },
      };

  // console.log(dataToShow);
  const fullName = `${dataToShow.name.title}. ${dataToShow.name.first} ${dataToShow.name.last}`;
  const age = `Age: ${dataToShow.age}`;

  return (
    <>
      <div className={styles.container}>
        <img
          src={dataToShow.imgSrc.large}
          alt="User Image"
          className={styles.userImage}
        />
        <div className={styles.textContainer}>
          {data ? (
            <>
              <p>{fullName}</p>
              <p>{age}</p>
            </>
          ) : (
            <div className={styles.loadingSpinner}></div>
            
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
