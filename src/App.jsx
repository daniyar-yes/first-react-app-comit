import { useEffect } from 'react';

function App() {

useEffect (() => {
  async function fetchApi(){
    try{
      const response = await fetch('https://randomuser.me/api/');
      
    }
    catch (error){
      console.log(error);
    }
  }
  console.log('API calls go here');
  
  fetchApi()
}, []);

  return <>Hello</>;
}




export default App;
