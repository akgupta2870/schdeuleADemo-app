import "../../Components/Input/Input.css";
export const Input = (props) => {
  return (
    <>
      <div className="input_section">
        <input
          type="text"
          name={props.name}
          onClick={props.inputvalue}
          // onChange={props.inputvalue}
          className="input"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export const MessageInput = (props) => {
  return (
    <>
      <div className="messageinput_section">
        <input
          type={props.type}
          name={props.name}
          onClick={props.inputvalue}
          // onChange={props.messageinputvalue}
          className="messageinput"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
