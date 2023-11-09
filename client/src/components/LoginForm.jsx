import { login, setAuthToken } from "../login.js";
import "../style/registrationForm.css";

function LoginForm() {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    loginUser({
      username: user.username,
      password: Object.assign([], user.password),
    });
  }

  const saveToken = (token) => {
    window.localStorage.setItem("auth_token", token);
  };

  function loginUser(data) {
    login(data)
      .then((response) => {
        saveToken(response.token);
        setAuthToken(response.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id="registration">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;
