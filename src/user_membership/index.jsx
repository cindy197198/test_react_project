import React, { Component } from "react";
import NavBar from "../components/navbar";
import { withRouter } from "react-router-dom";
import "./membership.css";

class UserMembership extends Component {
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__container">
            <div className="row">
              <div className="col-12">
                <NavBar />
              </div>
              <div className="col-12">
                <div className="membership-container">
                  <p>No membership</p>
                  <p>Get to know RYMC Membership</p>
                </div>
              </div>

              <div className="col-12">
                <button
                  className="btn next-btn"
                  onClick={() =>
                    this.props.history.push("/list-membership")
                  }
                >
                  + Get your membership
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(UserMembership);
