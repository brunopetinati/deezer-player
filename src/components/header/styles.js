import styled from "styled-components";
import { MenuItem } from "@material-ui/core";

export const HeaderStyle = styled.div`
  display: flex;
  background: #0059ff7c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    purple,
    #140212
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    purple,
    #140212
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 9vh;
  width:100vw;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: -8px;
  margin-left: -8px;
`;

export const HeaderButton = styled(MenuItem)`
  color: white !important;
  height:100%;
  &:hover {
    background-color:#680a5e!important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;
