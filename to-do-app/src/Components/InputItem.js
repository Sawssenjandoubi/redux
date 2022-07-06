import React from "react";
import { inputAction } from "../Redux/Action/inputAction";
export default function InputItem({ id, description, isDone }) {
  return (
    <div id={id}>
      <input type="checkbox" checkbox={isDone} />

      {description}
    </div>
  );
}
