import axios from "axios";
import { addSongs } from "./actions";


export const addSongsThunk = (setError) => (dispatch) => {
  axios
    .get(`https://sleepy-sea-69639.herokuapp.com/https://api.deezer.com/playlist/7932030762`)
    .then((res) => {
      dispatch(addSongs(res.data.tracks.data));
    })
    .catch((err) => setError(true));
};


export const addInputSongsThunk = (inputSong, setError) => (dispatch) => {
  axios
    .get(`https://sleepy-sea-69639.herokuapp.com/https://api.deezer.com/search?q=${inputSong}`)
    .then((res) => {
      dispatch(addSongs(res.data.data));
    })
    .catch((err) => console.log(err));
};
