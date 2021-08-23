import { ADD_TO_LIST } from "./action-types";

const songsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const { song } = action;
      state = []
      return [...state, song];

    default:
      return state;
  }
};

export default songsReducer;

  