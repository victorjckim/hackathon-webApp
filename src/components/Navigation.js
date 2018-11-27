import React from "react";
import { Route } from "react-router-dom";
import Park from "./Park";
import Register from "../components/Register";
import Login from "../components/Login";
import Extend from "../components/Extend";
import Landing from "../components/Landing";
import Settings from "../components/Settings";
import Comfirmation from "../components/ConfirmationPage";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Register} />
        <Route exact path="/Park" component={Park} />
        <Route exact path="/Landing" component={Landing} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Extend" component={Extend} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/ConfirmPage" component={Comfirmation} />
      </React.Fragment>
    );
  }
}

export default Navigation;
