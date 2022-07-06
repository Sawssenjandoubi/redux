import React from "react";
import todoReducer from "../../Redux/Reducer/todoReducer";

import { useSelector } from "react-redux";
import InputItem from "../InputItem";
export default function Input() {
  const { data } = useSelector((state) => state.todoReducer);
  // console.log(data);

  return (
    <div>
      {data.map((input) => {
        return (
          <InputItem
            key={input.id}
            description={input.description}
            isDone={input.isDone}
          />
        );
      })}
    </div>
  );
}
