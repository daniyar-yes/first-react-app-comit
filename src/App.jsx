import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState({});

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

  return <>Hello</>;
}




export default App;
