import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile/UserProfile';

function App() {

  const [userData, setUserData] = useState(null);
  // const displayName = userData ? userData?.results[0]?.name?.first : 'LOADING';
  

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data);
        const userProfileData = {
          name: {
            first: data.results[0].name.first,
            last: data.results[0].name.last,
            title: data.results[0].name.title
          },
          id: data.results[0].login.uuid,
          age: data.results[0].dob.age,
          imgSrc: {
            large: data.results[0].picture.large,
            medium: data.results[0].picture.medium , 
            thumbnail: data.results[0].picture.thumbnail ,
          }
        }
        setUserData(userProfileData);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchApi()
  }, []);

 


  return (
    <>
   
    {/* <p>{displayName}</p> */}
    <UserProfile data={userData} />
    </>
  );
}




export default App;
