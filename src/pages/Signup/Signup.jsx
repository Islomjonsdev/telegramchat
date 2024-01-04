import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [possibleError, setPossibleError] = useState("");
  const navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((response) => {
        if (response) {
          navigate("/");
        }
      })
      .catch((err) => {
        setPossibleError(err.message);
      });
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <h2>Sign up</h2>
        {possibleError && (
          <p style={{ color: "red", marginTop: "10px", marginBottom: "10px"}}>{possibleError}</p>
        )}
        <form onSubmit={signUpUser}>
          <label>Enter email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmailSignup(e.target.value)}
          />

          <label>Enter password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordSignup(e.target.value)}
          />

          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
