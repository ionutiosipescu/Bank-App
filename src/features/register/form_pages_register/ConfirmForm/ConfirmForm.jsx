import React, { useState } from "react";
import "./ConfirmForm.css";

function ConfirmForm({ values }) {
  const { userData } = values;
  console.log(userData.userDataObj.userProfile);
  return (
    <div>
      <div>
        <h1>confirm</h1>
      </div>
      <h2>Your Final Account Details:</h2>
      <div className="box">
        <div>
          <ul>
            {Object.entries(userData.userDataObj.userProfile).map((key) => {
              const randomKey = Math.random().toString(36).slice(2);
              return (
                <li key={randomKey}>
                  {key[0]}: --- {key[1]}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div>
          <ul>
            {Object.entries(userData.userDataObj.userProfile).map((key) => {
              const randomKey = Math.random().toString(36).slice(2);
              return (
                <li key={randomKey}>
                  {key[0]}: --- {key[1]}
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default ConfirmForm;
