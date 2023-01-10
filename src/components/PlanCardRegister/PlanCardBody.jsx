import React from "react";

function PlanCardBody({ ...props }) {
  const { option } = props;
  const details = option.details;
  return (
    <div className="plancard-body">
      <ul>
        {details.map((detail) => {
          return (
            <>
              <li>
                <span>{detail.nr}</span>
                {detail.name}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default PlanCardBody;
