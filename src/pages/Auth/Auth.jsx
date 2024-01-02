import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Auth.scss"

const Auth = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("")
  const [signinPossibleError, setSigninPossibleError] = useState("")
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, signinEmail, signinPassword)
      .then((response) => {
        if (response) {
          navigate("/main")
        }
      })
      .catch((err) => {
        setSigninPossibleError(err.message);
      })
  }
  return (
    <div className="signin">
      <div className="signin__container">
        <h2>Sign in</h2>
        {signinPossibleError && (
          <p style={{ color: "red", marginTop: "10px" }}>{signinPossibleError}</p>
        )}
        <form onSubmit={signIn}>
          <label>Enter email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setSigninEmail(e.target.value)}
          />

          <label>Enter password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setSigninPassword(e.target.value)}
          />

          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
