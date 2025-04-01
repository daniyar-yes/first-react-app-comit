/* eslint-disable react/prop-types */
import styles from "./UserProfile.module.css";
import RandomText from "../shared/RandomText/RandomText";
import { useSelector } from "react-redux";

const UserProfile = ({ data, textContent, buttonText, number, setNumber }) => {
  const fullName = `${data?.name?.title}. ${data?.name?.first} ${data?.name?.last}`;
  const age = `Age: ${data?.age}`;

  const numberFromGlobalState = useSelector(state => state.counter.value)

  return (
    <>
        <p>Number from useState: {number}</p>
        <button onClick={()=> setNumber(number+1)}>+1</button>
    <hr style={{minWidth: '300px'}}></hr>
    <p>Number from Global Store: {numberFromGlobalState}</p>


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
