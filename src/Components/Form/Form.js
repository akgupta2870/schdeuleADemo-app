import { useState } from "react";
import { Buttons } from "../Button/Buttons";
import { Input, MessageInput } from "../Input/Input";
import "./Form.css";
export const Form = () => {
  const [state, setState] = useState(1);
  const [isDisabledstate, setIsDisabled] = useState(true);
  const method = (e) => {
    setState(state + 1);
    if (state >= 5) {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <div className="banner">
        <div className="form_header">
          <div className="header">
            <div className="bookademo_block">
              <h3 className="underlineheading">BOOK A DEMO</h3>
              <hr className="underline" />
            </div>
            {/* <div className="bookademo_block">
              <h3 className="underlineheading">BECOME A PARTNER</h3>
              <hr className="underline" />
            </div> */}
          </div>
        </div>
        <div className="input_block">
          <Input
            placeholder="Name*"
            type="text"
            name="name"
            inputvalue={method}
          />
          <Input
            placeholder="Email*"
            type="email"
            name="email"
            inputvalue={method}
          />
          <Input
            placeholder="Phone*"
            type="number"
            name="phone"
            inputvalue={method}
          />
          <Input
            placeholder="Hotel Name*"
            type="text"
            name="hotelname"
            inputvalue={method}
          />
          <MessageInput
            placeholder="Message*"
            type="text"
            name="message"
            inputvalue={method}
          />
        </div>
        <div className="button_block">
          <span>
            <Buttons buttonname="Book A Demo" isDisabled={isDisabledstate} />
          </span>
          {/* <span>
            <Buttons buttonname="Become A Partner" />
          </span> */}
        </div>
      </div>
    </>
  );
};
