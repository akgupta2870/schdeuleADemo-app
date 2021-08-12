import { useState } from "react";
import "./Buttons.css";
export function Buttons(props) {
  // const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <div className="button_section">
        <button
          className="button_style"
          // disabled="false"
          disabled={props.isDisabled}
          onClick={props.functionname}
        >
          {props.buttonname}
        </button>
      </div>
    </>
  );
}
