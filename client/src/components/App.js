import { Outlet } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import '../style/app.css';

function App() {

  return (
    <div className="App">
      <nav>
        <h2 onClick={() => window.location.href = "/"}>Weather Cats</h2>
        <button onClick={() => window.location.href = "/register"}>Register</button>
        <Autocomplete />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
