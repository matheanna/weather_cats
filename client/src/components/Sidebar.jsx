import "../style/sidebar.css";
import login from "../img/login.png";
import register from "../img/register.png";
import settings from "../img/settings.png";

function Sidebar() {
  return (
    <div id="Sidebar">
      <div>
        <button
          className="icon-btn"
          onClick={() => (window.location.href = "/register")}
        >
          <img className="icon" src={register} alt="register" />
        </button>
        <b className="icontext">Register</b>
      </div>
      <div>
        <button
          className="icon-btn"
          onClick={() => (window.location.href = "/login")}
        >
          <img className="icon" src={login} alt="login" />
        </button>
        <b className="icontext">Login</b>
      </div>
      <div>
        <button className="icon-btn">
          <img className="icon" src={settings} alt="settings" />
        </button>
        <b className="icontext">Settings</b>
      </div>
    </div>
  );
}
export default Sidebar;
