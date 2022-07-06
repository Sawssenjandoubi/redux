import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAction } from "../../Redux/Action/inputAction";
import todoReducer from "../../Redux/Reducer/todoReducer";
export default function Add() {
  // const {data}=useSelector((state)=>state.todoReducer)
  // console.log(data)
  const [input, setInput] = React.useState({});
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput({
      [e.target.name]: e.target.value,
      id: Math.random(),
      isDone: false,
    });
    console.log(e.target);
  };

  return (
    <div>
      <input type="text" name="description" onChange={(e) => handleInput(e)} />
      <button onClick={() => dispatch(inputAction(input))}>Add</button>
    </div>
  );
}
