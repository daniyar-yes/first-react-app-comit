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
        const userProfileData = {
          name: {
            first: data.results[0].name.first || 'N/A',
            last: data.results[0].name.last || 'N/A',
            title: data.results[0].name.title || 'N/A'
          },
          id: data.results[0].login.uuid || 'N/A',
          age: data.results[0].dob.age || 'N/A',
        }
        setUserData(userProfileData);
        console.log(userData);
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
