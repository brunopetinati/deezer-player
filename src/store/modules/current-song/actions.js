import { ADD_TO_PLAYER } from "./action-types";

export const playSong = (song, image) => ({
  type: ADD_TO_PLAYER,
  song,
  image,
});

