import React from "react";
import { minutesToDuration } from "../utils/duration";

function IncreaseAndDecrease({
  handleBreak,
  handleFocus,
  focusDuration,
  breakDuration,
}) {
  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/*Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/*Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              id="decrease"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleFocus}
            >
              <span id="decrease" className="oi oi-minus" />
            </button>
            {/*Implement increasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              id="increase"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleFocus}
            >
              <span id="increase" className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                id="decrease"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleBreak}
              >
                <span id="decrease" className="oi oi-minus" />
              </button>
              {/* Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                id="increase"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleBreak}
              >
                <span id="increase" className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncreaseAndDecrease;
