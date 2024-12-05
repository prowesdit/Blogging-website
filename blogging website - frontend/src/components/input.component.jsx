import { useState } from "react";

const InputBox = ({ name, type, placeholder, id, value, icon }) => {
  const [passwordVisible, setPasswordVissible] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box "
      />

      <i className={"fi " + icon + " input-icon"}></i>
      {type == "password" ? (
        <i
          className={
            "fi fi-rr-eye" +
            (!passwordVisible ? "-crossed" : "") +
            " input-icon left-[auto] right-4"
          }
          onClick={() => setPasswordVissible((c) => !c)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};
export default InputBox;
