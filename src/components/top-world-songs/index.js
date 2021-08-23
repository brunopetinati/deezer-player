import { useState } from "react"
import { addSongsThunk } from "../../store/modules/data-songs/thunk"
import { useDispatch } from "react-redux";

import { StyledButton } from "../../styles/index"

const TopWorldSongs = () => {

    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(addSongsThunk(setError));
      };

    return (<>
    <StyledButton onClick={handleSearch}> Top World Songs</StyledButton>

    <div>{error && <span>Not possible to find results</span>}</div>
    </>)
}

export default TopWorldSongs;