import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile/UserProfile';

function App() {

  const [userData, setUserData] = useState(null);
  const displayName = userData ? userData?.results[0]?.name?.first : 'LOADING';
  
  const userProfileData = {
    name: {
      first: 'John',
      last: 'Smith',
      title: 'Mr'
    },
    id: '',
    age: 1,
  }
  

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUserData(data);
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchApi()
  }, []);

  return (
    <>
    <p>{displayName}</p>
    <UserProfile data={userProfileData} />
    </>
  );
}




export default App;
