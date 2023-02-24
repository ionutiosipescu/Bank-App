import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/Auth/register/register.selector";
import { ProgressBarBank } from "./MultiStepProgressBar.style";

function MultiStepProgressBar() {
  const step = useSelector(selectStep);
  return (
    <ProgressBar
      className="progress-bar"
      percent={(step * 100) / 3}
      filledBackground="indigo"
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>1</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>2</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>3</div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>4</div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default MultiStepProgressBar;
