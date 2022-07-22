import React from "react";

const Membership = (props) => {
  return (
    <div className={"membership-item-container "+ props.typeName}>
      <div className="row">
        <div className="col-2 pr-0">
            <div className="circle"></div>
        </div>
        <div className="col-10">
          <div className="row">
            <p className="col-9 p-0">{props.typeName} Membership</p>
            <p className="col-3 p-0 sar-number">{props.sarNumber} SAR</p>
          </div>
          <div className="row content">
            <p>Valid for one year</p>
            <p>
              Examination of the clinic at a discounted price of {props.riyals}{" "}
              riyals
            </p>
            <p>{props.discount}% discount on dental services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
