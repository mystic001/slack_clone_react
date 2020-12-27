import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { firebaseAuth, provider } from "./firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    firebaseAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          alt=""
          src="https://3.bp.blogspot.com/-Jse-dFpoM5w/XILR7dDlcbI/AAAAAAAAIgA/bnyYvKro0Ak18SqrebMmWRk9gKKof8G6ACK4BGAYYCw/s1600/logo%2Bslack.png"
        />
        <h1>Sign In to Mystic Cloned Slack</h1>
        <p>mystic001.com</p>

        <Button onClick={signIn}>Sign In to Slack</Button>
      </div>
    </div>
  );
}

export default Login;
