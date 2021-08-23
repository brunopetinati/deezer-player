import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "./action-types";

export const addToFavorites = (data) => ({
  type: ADD_TO_FAVORITE,
  data
});

export const removeFromFavorites = (dataToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  dataToRemove
})