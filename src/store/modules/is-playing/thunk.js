import { playOrPause } from "./actions";


export const playOrPauseThunk = () => (dispatch) => {
  dispatch(playOrPause())
};

