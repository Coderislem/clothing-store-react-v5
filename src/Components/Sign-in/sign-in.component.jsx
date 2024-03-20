import React, { useState } from "react";

import "./sign-in.style.scss";
import FormInput from "../Form-input/Form-input.component";
import CustomeButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../firebase/firebase.utils";
import Icon from "../../Components/icons/Icons.component";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HandSubmite(even) {
    even.preventDefault();
    setEmail("");
    setPassword("");
  }
  function HandChange(even) {
    const { value, name } = even.target;
    if (name === "Email") {
      setEmail(value);
    }
    if (name === "Password") {
      setPassword(value);
    } else console.error();
  }

  return (
    <div className="sign-in">
      <h2>i Have alredy account</h2>
      <span>Sign in with your email and password </span>
      <form action="" onSubmit={HandSubmite}>
        <div className="signin-normaly">
          <FormInput
            type="email "
            name="Email"
            value={email}
            required
            label="Email"
            onChange={HandChange}
          />

          <FormInput
            type="password "
            name="Password"
            required
            label="Password"
            value={password}
            onChange={HandChange}
          />

          <CustomeButton type="submit">SIGN IN</CustomeButton>
        </div>
        <div class="separator">
          <div class="separator-line">
            <hr style={{ width: "100%" }} />
            <span>or</span>
            <hr style={{ width: "100%" }} />
          </div>
        </div>
        <div className="LoginWithIcons">
          <CustomeButton onClick={signInWithGoogle} normaly="normaly" >
            <Icon
            
              name={faGoogle}
              style={{
                color: "#fa0025",
           }}
            />
            
          </CustomeButton>
          <CustomeButton onClick={signInWithGoogle} normaly="normaly" >
            <Icon
            
              name={faFacebook}
              style={{
                color: "#0b62f9",
           }}
            />
            
          </CustomeButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
