import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Button } from "reactstrap";
import useLogin from "../hooks/useLogin";

class LandingPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1> Coming soon </h1>
    );
  };
}

export default withRouter(LandingPage);
