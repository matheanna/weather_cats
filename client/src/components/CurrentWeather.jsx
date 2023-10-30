import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/currentWeather.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function getCurrent(cityName) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`;
  const res = await fetch(url);
//   if(!res.ok) {
//     //throw Error('Could not find this city :-(');
//     return {error: "no_weather", data: null}
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
        {/* <img id="calendar" src={require("../style/img/calendar.png")} alt="" /> */}
        <h3>{city.location.localtime}</h3>
        </div>
        <div>
        {/* <img id="placeholder" src={require("../style/img/placeholder.png")} alt="" /> */}
        <h2>{city.location.name} | {city.location.country}</h2>
        </div>
      </div>

      <div className="current-condition">
        {/* <img src={require("../style/img/Partly cloudy.png")} alt="condition icon" /> */}
        <h2>{city.current.condition.text}</h2>
      </div>

    </div>
  }</div>
  );
}
export default CurrentWeather;

      //  <ul>
      //     <li><h3>{city.location.country}, {city.location.name}</h3></li>
      //     <li><h4>time: {city.location.localtime}</h4></li>
      //     <li>temperature: {city.current.temp_c} °C</li>
      //     <li>feels like: {city.current.feelslike_c} °C</li>
      //     <li>condition: {city.current.condition.text}</li>
      //     <li>humidity: {city.current.humidity}</li>
      // </ul>