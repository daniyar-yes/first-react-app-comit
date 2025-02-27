import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState({});

  const displayName= userData ? userData.results[0].name.first : 'jhon';

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

  return <p>Hello {displayName}</p>;
}




export default App;
