import { STATUS } from "./action-types";

const statusReducer = (state = true, action) => {
  switch (action.type) {
    case STATUS:
      return !state;

    default:
      return state;
  }
};

export default statusReducer;
