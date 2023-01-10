import React from "react";

function PlanCardHeader({ ...props }) {
  const { option } = props;
  return (
    <div className="plancard-header">
      <h4>{option.planName}</h4>
      <div className="plancard-price">
        <div className="price-tag">{option.currency}</div>
        <h1>{option.price}</h1>
      </div>
    </div>
  );
}

export default PlanCardHeader;
