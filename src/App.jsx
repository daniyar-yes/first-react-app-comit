import { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import TimeLine from "./components/TimeLine/TimeLine";
import GeoLocation from "./components/GeoLocation/GeoLocation";
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchApi() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchApi();
  }, []);

  const userData = data
    ? {
        name: {
          first: data.results[0].name.first,
          last: data.results[0].name.last,
          title: data.results[0].name.title,
        },
        id: data.results[0].login.uuid,
        age: data.results[0].dob.age,
        imgSrc: {
          large: data.results[0].picture.large,
          medium: data.results[0].picture.medium,
          thumbnail: data.results[0].picture.thumbnail,
        },
      }
    : null;

  const timeLineData = data
    ? {
        dob: data.results[0].dob.date,
        registered: data.results[0].registered.date,
      }
    : null;

  const mapsData = data
    ? {
        lat: data.results[0].location.coordinates.latitude,
        lon: data.results[0].location.coordinates.longitude,
        city: data.results[0].location.city,
      }
    : null;

  if (isLoading || data === null) {
    return <div className="loadingSpinner"></div>;
  }

  if (error) {
    return <p>Sorry, error message says: {error}</p>;
  }
  return (
    <>
      <UserProfile data={userData} />
      <TimeLine data={timeLineData} />
      <GeoLocation data={mapsData} />
    </>
  );
}

export default App;
