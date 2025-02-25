import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
// TODOS:
// 1. split data and send only the small pieces needed for each component separately
function App() {
  const data = ourMockData.data; // think of it as of a global state
  const footerData = data.footer;

  const [phoneName, setPhoneName] = useState('Loading...');

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json();
        console.log(data)
        setPhoneName(data[2].name)
      } catch (error) {
        console.error(error)
      } 
    }

    fetchApi();

  }, [])
  
  return (
    <>
      <header>
        <h3>{data.header}</h3>
      </header>
      {phoneName}
      <ProfileSummary data={data} />
      <Posts data={data} />
      {/* HOME TASK: isolate input in a separate Component and output in console the value from the input. And clear the input field */}
      {/* we should be able to call it here like: <InputField /> */}

      <InputField />

      <Footer footerData={footerData} />


    </>
  );
}

export default App;
