import React, { Component } from "react";
import "./welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <div className="row center">
              <div className="logo">
                <img src="/image/logo.png" width="350" height="200" />
              </div>
              <div className="col-12 text__container">
                <p>RYMC MEMBERSHIPE</p>
                <p>Premium membership for non-medical insurance card holders</p>
                <p className="mt-5">We are at your service</p>
              </div>

              <div className="col-12">
                <button className="btn next-btn" onClick={()=> this.props.history.push('/verification-step-1')}>
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Welcome;
