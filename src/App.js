import React, { Component } from "react";
import VerificationCode from "./request_verification";
import Welcome from "./welcome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserMembership from "./user_membership";
import ListMembership from "./list_membership";
import MembershipRegistration from "./membership_registration";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />

            <Route path="/verification-step-1" component={() => <VerificationCode step = {1} />} />
            <Route path="/verification-step-2" component={() => <VerificationCode step = {2} />} />
            <Route path="/my-membership" component={UserMembership} />
            <Route path="/list-membership" component={ListMembership} />
            <Route path="/register-membership" component={() => <MembershipRegistration step = {1} />} />
            <Route path="/register-membership-step-2" component={() => <MembershipRegistration step = {2} />} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
