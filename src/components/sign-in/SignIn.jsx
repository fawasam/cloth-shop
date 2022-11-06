import React from "react";
import { useState } from "react";
import CustomBtn from "../custom-button/CustomBtn";
import FormInput from "../form-input/form-input";
import "./signIn.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils.js";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    textChange: "Sign In",
  });
  const { email, password, textChange } = formData;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          required
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomBtn type="submit">Sign in</CustomBtn>
          <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
