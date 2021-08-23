import { useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

import { playOrPauseThunk } from "../../store/modules/is-playing/thunk"

import { PlayerContainer } from "./styles"



const Player = () => {

  const currentSong = useSelector((state) => state.current_song.song);



  const globalPlaying = useSelector((state) => state.song_status)

  const dispatch = useDispatch()

  const audioEl = useRef(null)

  useEffect(()=>{ 

    if (globalPlaying) {

      audioEl.current.play(); 

    } else { audioEl.current.pause();}

    /* const skipSong = (fowards = true) => {}
      if (fowards) {soma} else {subtrai};
    } */

  },[currentSong, globalPlaying])


    return (
    
    <PlayerContainer width="24px">
      <FontAwesomeIcon height="50px" icon={globalPlaying ? faPause : faPlay} onClick={()=> {
        dispatch(playOrPauseThunk());
        }}>
        </FontAwesomeIcon>
      <audio preload autoplay src={currentSong} ref={audioEl} />
      </PlayerContainer>
    )
}

export default Player