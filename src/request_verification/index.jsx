import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./index.css";
import { withRouter } from 'react-router-dom';

class VerificationCode extends Component {
  render() {

    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__container">
            <div className="row">
              <div className="col-12">
                <NavBar />
              </div>
              <div className="logo">
                <img src="/image/logo_blue.png" width="289" height="289" />
              </div>
              {this.props.step === 1 && (<div className="col-12">
                  <div className="col-12">
                    <input
                      className="input-text"
                      placeholder="+966   555589843"
                    />
                  </div>

                  <div className="col-12">
                    <button className="btn next-btn" onClick={() => this.props.history.push('/verification-step-2')}>
                      Request verification code
                    </button>
                  </div></div>
              )}
              {this.props.step === 2 && (
                <div className="col-12">
                  <div className="col-12">
                    <input
                      className="input-text"
                      placeholder="Enter the verification code"
                    />
                  </div>

                  <div className="col-12">
                    <button className="btn next-btn" onClick={() => this.props.history.push('/my-membership')}>Check now</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(VerificationCode);
