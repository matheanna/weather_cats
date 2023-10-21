import "../style/registrationForm.css";

function RegistrationForm() {

  function handleSubmit(event) {
    //TODO: check if all is valid
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  }

  return (
    <div id="registration">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
        />
        <input type="text" placeholder="Username" name="username" />
        <input
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm password"
        />
        <button type="submit">Register</button>
      </form>
        
    </div>
  );
}
export default RegistrationForm;