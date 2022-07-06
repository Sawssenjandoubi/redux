import { inputAction } from "../Action/inputAction";
const initialstate = {
  data: [{ id: 1, description: "list", isDone: true }],
};
const todoReducer = (state = initialstate, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INPUT_ACTION":
      return {
        ...state,
        data: [...state.data, payload],
      };
    default:
      return state;
  }
};
export default todoReducer;
