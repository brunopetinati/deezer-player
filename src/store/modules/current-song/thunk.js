import { playSong } from "./actions";


export const playSongThunk = (songLink, artistImage) => (dispatch) => {
        dispatch(playSong(songLink, artistImage));    
  };
  