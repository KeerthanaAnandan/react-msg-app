import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase.js";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          alt="img"
          src="https://i.pinimg.com/originals/98/c5/d8/98c5d85f82ff7d367387457ede631f9a.png"
        />

        <div className="login-text">
          <h1>Sign in to Chatify</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
