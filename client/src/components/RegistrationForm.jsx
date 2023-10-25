import { useState } from "react";
import { useSet } from "@uidotdev/usehooks";
import "../style/registrationForm.css";

function NewReg() {
  const messages = useSet([]);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (isAllValid()) {
      const formData = new FormData(event.target);
      const userData = Object.fromEntries(formData.entries());
      console.log(userData);
    }
  }

  function isAllValid() {
    console.log(isEmailValid, isPasswordValid, isUsernameValid);
    return isEmailValid && isPasswordValid && isUsernameValid;
  }

  //email validation
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      messages.add("Email must be valid");
      setIsEmailValid(false);
    } else {
      messages.delete("Email must be valid");
      setIsEmailValid(true);
    }
  };

  //username validation

  function handleNameChange(e) {
    //TODO: check if username exists
    setIsUsernameValid(true);
  }

  //password validation

  function pwHasUpperCase(pw) {
    if (!pw.match(/[A-Z]/)) {
      messages.add("Password must contain an uppercase letter");
      return false;
    } else {
      messages.delete("Password must contain an uppercase letter");
      return true;
    }
  }

  function pwHasLowerCase(pw) {
    if (!pw.match(/[a-z]/)) {
      messages.add("Password must contain an lowercase letter");
      return false;
    } else {
      messages.delete("Password must contain an lowercase letter");
      return true;
    }
  }

  function pwHasNumber(pw) {
    if (!/\d/.test(pw)) {
      messages.add("Password must contain a number");
      return false;
    } else {
      messages.delete("Password must contain a number");
      return true;
    }
  }

  function handlePasswordChange(event) {
    const pw = event.target.value;
    const pwHasUpper = pwHasUpperCase(pw);
    const pwHasLower = pwHasLowerCase(pw);
    const pwHasNum = pwHasNumber(pw);
    if (pwHasUpper && pwHasLower && pwHasNum) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  return (
    <div id="registration">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleNameChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Register</button>
        <div id="invalidDataMessages">
          {messages &&
            Array.from(messages.values()).map((m) => (
              <b key={Array.from(messages.values()).indexOf(m)}>{m}</b>
            ))}
        </div>
      </form>
    </div>
  );
}
export default NewReg;
