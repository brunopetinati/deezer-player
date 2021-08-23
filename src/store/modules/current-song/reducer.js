import { ADD_TO_PLAYER } from "./action-types";

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      const song = action;
      const image = action;
      state = []
      return song && image;

    default:
      return state;
  }
};

export default playerReducer;