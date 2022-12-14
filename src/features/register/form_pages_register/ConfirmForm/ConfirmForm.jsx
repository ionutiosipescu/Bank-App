import React from "react";

function ConfirmForm({ values }) {
  const { formFields } = values;
  console.log(formFields);
  return (
    <div>
      <h2>Your Final Account Details:</h2>
      <ul>
        {Object.entries(formFields).map((key) => {
          const randomKey = Math.random().toString(36).slice(2);
          return (
            <li key={randomKey}>
              {key[0]}: --- {key[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConfirmForm;
