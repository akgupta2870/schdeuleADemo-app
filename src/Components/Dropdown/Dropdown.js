import "./Dropdown.css";
export const Dropdown = (props) => {
  return (
    <>
      <div className="dropdown_section">
        <select className="dropdown">
          <option value="#" selected>
            Select Your Country
          </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
      </div>
    </>
  );
};
