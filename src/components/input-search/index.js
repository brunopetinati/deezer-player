import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInputSongsThunk } from "../../store/modules/data-songs/thunk";
import  TopWorldSongs  from "../top-world-songs"

import { Container } from "./styles"
import { StyledButton , StyledInput} from "../../styles/index"

const InputSearch = (title) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if(input !== ""){ 
    dispatch(addInputSongsThunk(input, setError))};
  };

  return (
    <div>
      <Container>
        <TopWorldSongs />
        <StyledInput type="text" placeholder="Enjoy Top World Songs by Deezer!" value={input} onChange={(e) => setInput(e.target.value)} />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Container>
      <div>{error && <span>Not possible to find results</span>}</div>
    </div>
  );
};

export default InputSearch;
