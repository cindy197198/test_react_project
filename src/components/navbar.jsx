import React from "react";

const NavBar = (props) => {
  console.log(props)
  return (
    <nav className="w-100 float-right">
      <div className="row">
        <div className="col-6" hidden={!props.isShowProfile}>
          <div className="row profile-info">
            <div className="col-6" >
              <img
                className="profile-image"
                src="/image/profile_image.png"
                width="70"
                height="70"
              />
            </div>
            <div className="col-6 text-align-center">
              <p className="user-name">adel saeed</p>
            </div>
          </div>
        </div>
        <div className={props.isShowProfile ? "col-6" : "col-12"}>
          <div className="row float-right action-buttons">
            <button className="btn call-btn">
              <img
                className="call-icon"
                src="/image/call_icon.png"
                width="20"
                height="20"
              />
            </button>
            <div className="notification">
              <div className="noti-dot"></div>
              <img
                className="bell-icon"
                src="/image/bell_icon.png"
                width="25"
                height="29"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
