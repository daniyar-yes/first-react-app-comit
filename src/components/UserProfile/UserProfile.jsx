/* eslint-disable react/prop-types */
const UserProfile = ({ data }) => {
  const dataToShow = data
    ? data
    : {
        name: {
          first: "FN NA",
          last: "LN NA",
          title: "Title NA",
        },
        id: "ID NA",
        age: "AGE NA",
      };
  console.log(dataToShow);

  return (
    <>
      <p>
        {`Name: ${dataToShow.name.title} ${dataToShow.name.first} ${dataToShow.name.last}`}
      </p>
      <p>{`Age: ${dataToShow.age}`}</p>
    </>
  );
};

export default UserProfile;
