import React, { Component } from "react";
import axios from "axios";

class Sign extends Component {
    
  state = {
    users: '',
  };

  componentDidMount() {
    axios
      .post("http://localhost:3001/auth/sign-in", {
        phone: "+19254223749",
        password: "123",
      })
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    return (
       <h2>Welcome! {this.state.users.email}</h2>
    );
  }
}
export default Sign;
