import { ADD_TO_LIST } from "./action-types";

export const addSongs = (song) => ({
  type: ADD_TO_LIST,
  song,
});

