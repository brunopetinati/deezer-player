//import favoritesSongs from "../../components/songs-list/index"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { playSongThunk } from "../../store/modules/current-song/thunk";
import { removeFromFavoritesThunk } from "../../store/modules/favorites/thunk";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { PaginationContainer, PaginationStyle } from "../../styles/index"

import { StyledButton2 } from "../../styles/index"


const MySongs = () => {

    
    const favorites = useSelector((state) => state.favorite_songs);
    console.log(favorites)

    var [currentPage, setCurrentPate] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const dispatch = useDispatch();

/*     const handleFavorite = () => {
      dispatch(addToFavoritesThunk(data));
    }; */

    if(favorites !== undefined){

      var currentPosts = favorites.slice(indexOfFirstPost, indexOfLastPost);
      var totalPosts = favorites.length;

    }
    
    const Pagination = () => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
      return (
        <nav>
          {pageNumbers.length > 1 && <PaginationContainer>
            {pageNumbers.map((number) => (
              <div key={number}>
                <PaginationStyle onClick={() => paginate(number)} href="#!">
                  {number}
                </PaginationStyle>
              </div>
            ))}
          </PaginationContainer>}
        </nav>
      );
    };
  
    const paginate = (pageNumber) => setCurrentPate(pageNumber);



    const handleFavorite = (title, album, artist, duration, preview, link) => {

      const dataToRemove = {
        "title":title,
        "album":album,
        "artist":artist,
        "duration": duration,
        "preview": preview,
        "link": link
      }

      dispatch(removeFromFavoritesThunk(dataToRemove));
    };


    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1>Your favorite songs here!</h1>
        {currentPosts && currentPosts.map(({ title, album, artist, duration, preview, link, cover}, index) => (
          <>
          <table key={index} ><FontAwesomeIcon icon={faHeartBroken} onClick={() => handleFavorite(title, album, artist, duration, preview, link)}></FontAwesomeIcon> | {title} by {artist} <StyledButton2 onClick={() => {
          dispatch(playSongThunk(preview, cover));
          }}> preview
          </StyledButton2> | <a href={link}>Deezer</a>
          </table>
          </>
        ))}
        <Pagination />
      </motion.div>
      )
};

export default MySongs;

