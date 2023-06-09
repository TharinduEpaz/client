import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordreg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:5001/register", {
      username: usernameReg,
      password: passwordreg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:5001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].username)
      }
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>

        <label>User Name</label>
        <input type="text" onChange={(e) => setUsernameReg(e.target.value)} />

        <label>password</label>
        <input
          type="password"
          onChange={(e) => setPasswordReg(e.target.value)}
        />

        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={login}>Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
