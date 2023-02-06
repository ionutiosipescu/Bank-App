import React from "react";

function PlanCardBody({ ...props }) {
  const { option } = props;
  const details = option.details;
  return (
    <div className="plancard-body" key={option.key}>
      <ul>
        {details.map((detail, index) => {
          return (
            <React.Fragment key={index}>
              <li>
                {detail.name}
                <span>{detail.nr}</span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default PlanCardBody;
