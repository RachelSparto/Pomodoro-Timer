import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionControl({
  session,
  displayDuration,
  ariaUpdated,
  isTimerRunning,
}) {
  return (
    /* This area should show only when there is an active focus or break - i.e. the session is running or is paused */
    session && (
      <div>
        <div className="row mb-2">
          <div className="col">
            {/* Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {minutesToDuration(displayDuration(session?.label))} minutes
            </h2>
            console.log({session?.label})
            {/* Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h2>Paused</h2>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaUpdated} // Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaUpdated}%` }} // Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SessionControl;
