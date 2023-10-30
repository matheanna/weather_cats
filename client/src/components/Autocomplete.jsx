import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import "../style/autocomplete.css"
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function getSearch(search) {
  const url = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${search}`;
  const res = await fetch(url);
  return await res.json();
}

function Autocomplete() {
  const [cities, setCities] = useState();
  const [city, setCity] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getSearch(city)
    .then((res) => setCities(res));
  }, [city]);

    function handleChange(e){
      if(e.target.value.length > 0) setCity(e.target.value);
    }
  function handleClick(cityName){
    navigate("/current/" + cityName);
  }

  return (
    <div>
        <input className="searchbar" type="text" placeholder="search city..." onChange={handleChange}/>
    {cities &&
      cities.map((city) => <h1 className="search-cityname" key={city.id} onClick={() => handleClick(city.name)}>{city.name}</h1>)
    }
    </div>
  );
}
export default Autocomplete;