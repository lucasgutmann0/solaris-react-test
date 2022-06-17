import React from "react";

export default function InputText(props) {
  return (
    <input
      className="formInput"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
