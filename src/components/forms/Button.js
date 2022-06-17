import React from "react";

export default function Button(props) {
  return (
    <button className="formButton" type="button">
      {props.nombre}
    </button>
  );
}
