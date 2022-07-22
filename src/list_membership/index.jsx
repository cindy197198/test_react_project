import React, { Component } from "react";
import NavBar from "../components/navbar";
import { withRouter } from "react-router-dom";
import Membership from "../components/membershipItem";

class ListMembership extends Component {
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
                <div className="membership-list mt-5">
                  <Membership typeName="Platinum" riyals="80" discount="30" sarNumber="89" />
                  <Membership typeName="Golden" riyals="98" discount="20" sarNumber="69" />
                  <Membership typeName="Silver" riyals="110" discount="10" sarNumber="42" />
                </div>
              </div>

              <div className="col-12">
                <button
                  className="btn choose-btn"
                  onClick={() =>
                    this.props.history.push("/register-membership")
                  }
                >
                  Choose the membership
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(ListMembership);
