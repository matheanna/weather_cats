import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/currentWeather.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function getCurrent(cityName) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`;
  const res = await fetch(url);
//   if(!res.ok) {
//     //throw Error('Could not find this city :-(');
//     return {error: "no weather", data: null}
//   }
  return await res.json();
  //return {error: null, data: await res.json()};
} 

function CurrentWeather() {
  const [city, setCity] = useState();
  let { cityName } = useParams();
console.log(city)
  useEffect(() => {
    getCurrent(cityName)
    .then((w) => setCity(w));
  }, [cityName]);

  return (
  <div>{city &&
    <div className="currentWeather">

      <div className="current-main-data">
        <div>
        <h1>{city.current.temp_c} °C</h1>
        </div>
        <div>
        <h3>{city.location.localtime}</h3>
        </div>
        <div>
        <h2>{city.location.name} | {city.location.country}</h2>
        </div>
        <h2>feels like: {city.current.feelslike_c} °C</h2>
        <h2>humidity: {city.current.humidity}</h2>
      </div>

      <div className="current-condition">
        <h2>{city.current.condition.text}</h2>
      </div>

    </div>
  }</div>
  );
}
export default CurrentWeather;