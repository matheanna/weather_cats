import { Outlet } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import "../style/app.css";
import Sidebar from "./Sidebar";

function App() {

  return (
    <div className="App">
      <nav>
        <div>
          <h2 onClick={() => (window.location.href = "/")}>WeatherCats</h2>
        </div>
        <Autocomplete />
      </nav>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
