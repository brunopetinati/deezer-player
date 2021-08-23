import { useDispatch } from "react-redux";
import { playSongThunk } from "../../store/modules/current-song/thunk";
import { addToFavoritesThunk } from "../../store/modules/favorites/thunk";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { StyledButton2 } from "../../styles/index"

const Song = ({ title, album, artist, duration, preview, link, cover }) => {

  const dispatch = useDispatch();

  const data = {
    "title":title,
    "album":album,
    "artist":artist,
    "duration": duration,
    "preview": preview,
    "link": link,
    "cover": cover
  }


  const handleFavorite = () => {
    dispatch(addToFavoritesThunk(data));
  };
  
    return (<>

    <table>
      <FontAwesomeIcon icon={faHeart} onClick={() => handleFavorite()}></FontAwesomeIcon> | {title} | {album} | {artist} | {duration} <StyledButton2 onClick={() => {
      dispatch(playSongThunk(preview, cover));
      }}> preview </StyledButton2> | <a href={link}>Deezer</a>
    </table>
  


    

    </>);
  };
  
  export default Song;
  

  