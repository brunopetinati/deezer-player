import { useState  } from "react";
import { useSelector } from "react-redux";

import Song from "../song/index"

import { PaginationContainer, PaginationStyle } from "../../styles/index"




const ListSongs = () => {

    const songs = useSelector((state) => state.top_songs[0]);

    var [currentPage, setCurrentPate] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    if(songs !== undefined){

      var currentPosts = songs.slice(indexOfFirstPost, indexOfLastPost);
      var totalPosts = songs.length;

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

    return (
      <>
        {currentPosts && currentPosts.map(({ title, album, artist, duration, preview, link, cover}, index) => (
          <Song key={index} title={title} album={album.title} artist={artist.name} duration={duration} preview={preview} link={link} cover={album.cover} />
        ))}
        <Pagination />
      </>
      )
};

export default ListSongs;