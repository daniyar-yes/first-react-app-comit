// import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";
import Posts from "./components/Posts";

// TODOS:
// 1. split data and send only the small pieces needed for each component separately
function App() {
  const data = ourMockData.data; // think of it as of a global state
  
  return (
    <>
      <ProfileSummary data={data}/>
      <Posts data={data} /> 
      {/* list -> array */}
    </>
  );
}

export default App;
