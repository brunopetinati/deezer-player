import styled from "styled-components";

export const PlayerContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width:100vw;
    height: 11vh;
    color:white;
    background: -webkit-linear-gradient(
    to right,
    #140212,
    purple
  ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
    to right,
    #140212,
    purple
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    overflow:hidden; /* or auto */
    margin: 0;
    margin-left: -8px;
    margin-bottom:-8px;
    `;
