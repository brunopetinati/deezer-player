import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSongsThunk } from "../../store/modules/data-songs/thunk";


const SearcherEngine = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(addSongsThunk(setError));
  }, [dispatch]);

  return (
    <div>
      <div>{error && <span>Lista não encontrada</span>}</div>  
    </div>
  );
};

export default SearcherEngine;
