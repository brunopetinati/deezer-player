import { addToFavorites, removeFromFavorites } from "./actions";


export const addToFavoritesThunk = (data) => (dispatch) => {
    dispatch(addToFavorites(data));   
};


export const removeFromFavoritesThunk = (dataToRemove) => (dispatch) => {
    dispatch(removeFromFavorites(dataToRemove));
};
