import React, { useState } from "react";
import "./ConfirmForm.css";
import { Fragment } from "react";

function ConfirmForm({ values }) {
  const { userData } = values;
  console.log(userData.userDataObj.userProfile);
  const arrDataForm = userData.userDataObj.userPlan;
  return (
    <div>
      <div>
        <h1>confirm</h1>
      </div>
      <h2>Your Final Account Details:</h2>
      <div className="box">
        <div>
          <h3>User Details:</h3>
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
        <div>
          <h3>Plan Details:</h3>
          <ul>
            {Object.entries(userData.userDataObj.userPlan).map((key) => {
              const randomKey = Math.random().toString(36).slice(2);
              return (
                <Fragment key={randomKey}>
                  {Object.entries(key[1]).map((newKey) => {
                    const randomKeyNew = Math.random().toString(36).slice(2);
                    return (
                      <li key={randomKeyNew}>
                        {newKey[0]}: --- {newKey[1]}
                      </li>
                    );
                  })}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConfirmForm;
