import React, { Component } from "react";
import NavBar from "../components/navbar";
import { withRouter } from "react-router-dom";
import Membership from "../components/membershipItem";

class MembershipRegistration extends Component {
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__container">
            <div className="row">
              <div className="col-12">
                <NavBar />
              </div>
              <div className="membership-item-container my-5">
                <div className="col-12">
                  <p className="row mb-2">Platinum Membership</p>
                  <div className="row">
                    <p className="col-9 p-0 price">price includes tax</p>
                    <p className="col-3 p-0 price">89</p>
                  </div>
                  <div className="row content">
                    <p className="small-text">
                      Examination of the clinic at a discounted price of 80
                      riyals
                    </p>
                    <p className="small-text mb-1">
                      30% discount on dental services
                    </p>
                    <p className="col-12 pl-0">Valid for one year</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <input
                  className="input-text mb-4"
                  placeholder="National Identity"
                />
              </div>
              <div className="col-12">
                <input className="input-text mb-4" placeholder="Full Name" />
              </div>
              <div className="col-12">
                <input className="input-text" placeholder="Date of Birth" />
              </div>
              <div className="col-12">
                <button
                  className="btn next-btn"
                  onClick={() =>
                    this.props.history.push("/verification-step-2")
                  }
                >
                  MADA
                </button>
              </div>
              <div className="col-12">
                <button className="btn next-btn mt-4">APPLE PAY</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(MembershipRegistration);
