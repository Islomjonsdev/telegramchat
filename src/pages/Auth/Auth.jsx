import React, { useState } from "react";
import { auth, googleAuthProvider } from "../../firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
  const navigate = useNavigate();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signinPossibleError, setSigninPossibleError] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, signinEmail, signinPassword)
      .then((response) => {
        if (response) {
          navigate("/main");
        }
      })
      .catch((err) => {
        setSigninPossibleError(err.message);
      });
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((response) => {
        if (response) {
          navigate("/");
        }
      })
      .catch((err) => {
        setSigninPossibleError(err.message);
      });
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <h2>Sign in</h2>
        {signinPossibleError && (
          <p style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}>
            {signinPossibleError}
          </p>
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
        <button
          onClick={signInWithGoogle}
          style={{ marginBottom: "10px", cursor: "pointer" }}
        >
          Sign in with goole
        </button>
        <span>
          Already signed up? <Link to="/signup">Go to sign in.</Link>
        </span>
      </div>
    </div>
  );
};

export default Auth;
