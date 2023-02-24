import React from "react";

function LoanStatusTitle({ ...props }) {
  const { approved, details } = props;
  return (
    <h1>
      {approved === "approved"
        ? `Your ${
            `${details}`.charAt(0).toUpperCase() + `${details}`.slice(1)
          } loan was
    accepted!`
        : approved === "salary"
        ? `Unfortunately your loan was not accepted.`
        : `You reached your limit`}
    </h1>
  );
}

export default LoanStatusTitle;
