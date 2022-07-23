import React, { Component } from "react";
import NavBar from "../components/navbar";
import { withRouter } from "react-router-dom";

class GoldenMembership extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  onCardClick(showPopUp) {
    this.setState({
      showPopup: showPopUp
    });
  }
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__container pb-0 wrapper">
            <div className="row mb-5">
              <div className="col-12">
                <NavBar isShowProfile={true} />
              </div>
              <div className="col-12">
                <div
                  className="golden membership-container"
                  onClick={() => this.onCardClick(true)}
                >
                  <h4 className="membership-title">Golden Membership</h4>
                  <p className="sub-title mb-5">Adel Saeed Alqahtani</p>
                  <p className="sub-title">
                    Click here to view membership information
                  </p>
                </div>
              </div>

              <div className="col-12">
                <button className="btn next-btn">
                  + Add membership for a family member
                </button>
              </div>
            </div>
            <div className="row golden-image">
              <img src="/image/golden_wave.png" />
            </div>
            {this.state.showPopup && (
              <div className="row golden-detail" onClick={() => this.onCardClick(false)}>
                <p className="col-12 membership-title pt-3">
                  Golden Membership
                </p>
                <p className="col-12 sub-title">Adel Saeed Alqahtani</p>
                <p className="col-12 big-text">1119989899</p>
                <p className="col-12 big-text">Expire date</p>
                <p className="col-12 big-text">01/01/2023</p>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(GoldenMembership);
