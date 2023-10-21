import { useState } from "react";
import "../style/registrationForm.css";

function RegistrationForm() {
  const [password, setPassword] = useState();
  const [invalidDataMessages, setInvalidDataMessages] = useState([]);

  function handleSubmit(event) {
    //TODO: check if all is valid
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  }

  //email validation-------------------------------------------------------------------

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
       if(invalidDataMessages.filter(m => m.message === "Email must be valid").length < 1){
      setInvalidDataMessages([...invalidDataMessages, {id: 1, message: "Email must be valid"} ]);
    }
    } else {
     setInvalidDataMessages(invalidDataMessages => invalidDataMessages.filter(m => !m.message.includes("Email")))
    }
  };

  //password validation-----------------------------------------------------------------

  function pwHasUppercase(pw){
    if (!pw.match(/[A-Z]/)) {
        if(invalidDataMessages.filter(m => m.message === "Password must contain an uppercase letter").length < 1){
      setInvalidDataMessages( invalidDataMessages => [...invalidDataMessages, {id: 2, message: "Password must contain an uppercase letter"}]);
    }
      return false; 
    }
    return true;
  }
  function pwHasLowerCase(pw){
        if (!pw.match(/[a-z]/)){
            if(invalidDataMessages.filter(m => m.message === "Password must contain an lowercase letter").length < 1){
        setInvalidDataMessages( invalidDataMessages => [...invalidDataMessages, {id: 3, message: "Password must contain an lowercase letter"}])
            }
        return false; 
    }
    return true;
  }
  function pwHasNumber(pw){
        if (!/\d/.test(pw)){
            if(invalidDataMessages.filter(m => m.message === "Password must contain a number").length < 1){
        setInvalidDataMessages( invalidDataMessages => [...invalidDataMessages, {id: 4, message: "Password must contain a number"}])       
            }
        return false; 
    }
    return true;
  }

  const handlePasswordChange = (event) => {
    const pw = event.target.value;
    setPassword(pw);
    if(pwHasUppercase(pw)){
        setInvalidDataMessages(invalidDataMessages => invalidDataMessages.filter(m => m.message !== "Password must contain an uppercase letter"));
    }
    if(pwHasLowerCase(pw)){
        setInvalidDataMessages(invalidDataMessages => invalidDataMessages.filter(m => m.message !== "Password must contain an lowercase letter"));
    }
    if(pwHasNumber(pw)){
        setInvalidDataMessages(invalidDataMessages => invalidDataMessages.filter(m => m.message !== "Password must contain a number"));
    }
  };


  function isMatching(e) {
    if (e.target.value === password){
        setInvalidDataMessages(invalidDataMessages => invalidDataMessages.filter(m => !m.message.includes("Passwords")));
    }
    else if(invalidDataMessages.filter(m => m.message === "Passwords must match").length < 1){
        setInvalidDataMessages( invalidDataMessages => [...invalidDataMessages, {id: 5, message: "Passwords must match"}])
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
        <input type="text" placeholder="Username" name="username" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={isMatching}
        />
        <button type="submit">Register</button>
      </form>
        {invalidDataMessages && invalidDataMessages.map(m => 
        <h3 key={m.id}>{m.message}</h3>)
        }
    </div>
  );
}
export default RegistrationForm;
