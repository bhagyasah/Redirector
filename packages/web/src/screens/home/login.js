import React, { Component } from "react";
import {Button, Intent, Spinner } from "@blueprintjs/core";

class Login extends Component {
  render() {
    return(
    <div>
      <h1>login page </h1>
      <Button intent={Intent.PRIMARY} type="button" className="pt-button pt-icon-add">Default button</Button>
      <Button intent = {Intent.DANGER} className="pt-button pt-icon-refresh"></Button>
      <Button  intent={Intent.SUCCESS}className="pt-button pt-large pt-icon-add">Large button</Button>
      <Button  className="pt-button pt-large pt-icon-refresh"></Button>
    </div>
    );
  }
}
export default Login;