import React, { useState } from "react";
import axios from "axios";

const Sign = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const userPhoneSet = (event) => {
    setPhone(event.target.value);
  };

  const userPasswordSet = (event) => {
    setPassword(event.target.value);
  };

  const toSignIn = () => {
    axios
      .post("http://localhost:3001/auth/sign-in", {
        phone: phone,
        password: password,
      })
      .then((response) => {
        setEmail(response.data.email);
      });
  };

  return (
    <form>
      <input
        type="phone"
        name="phone"
        placeholder="Enter your phone number"
        required
        onChange={userPhoneSet}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
        onChange={userPasswordSet}
        required
      />
      <button type="submit" onClick={toSignIn}>
        Sign In
      </button>
      <h3>{email}</h3>
    </form>
  );
};
export default Sign;
