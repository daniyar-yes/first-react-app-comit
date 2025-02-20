// import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
// TODOS:
// 1. split data and send only the small pieces needed for each component separately
function App() {
  const data = ourMockData.data; // think of it as of a global state
  const footerData = data.footer;


  return (
    <>
      <header>
        <h3>{data.header}</h3>
      </header>
      <ProfileSummary data={data} />
      <Posts data={data} />
      {/* HOME TASK: isolate input in a separate Component and output in console the value from the input. And clear the input field */}
      {/* we should be able to call it here like: <InputField /> */}
      <label htmlFor="name">Leave a comment:</label>
      <br></br>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        maxLength="800"
        size="10"
      />
      <button>submit</button>
      <Footer footerData={footerData} />


    </>
  );
}

export default App;
