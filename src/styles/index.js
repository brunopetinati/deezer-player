import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width:100vw;
  background: #140213;
  padding: 1px 0; 
  color: #ff1bf8;
  font-size: 3vh;
  margin: 0px;
  padding: 0px;
  margin-left: -8px;
`;

export const StyledButton = styled(Button)`
  background-color: #470745  !important;
  width: 30vh;
  height: 7vh !important;
  border: 1px solid !important;
  color: white !important;
 
  &:hover {
    background-color: #8c0d7f !important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;

export const StyledButton2 = styled(Button)`
  background-color: black !important;
  width: 15vh;
  height: 2vh !important;
  border: 1px solid !important;
  color: #ff1bf8 !important;
  font-family: Arial, Helvetica, sans-serif  !important;
  font-size: 10px  !important;
  letter-spacing: 2px  !important;
  font-weight: normal  !important;
  text-decoration: none  !important;
  font-style: italic  !important;
  font-variant: normal !important;
  text-transform: none  !important;
  margin-bottom: 5px !important;
  &:hover {
    background-color: #51084e!important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #140213;
  color: White;
  height: 100%;
  padding-top: 5vh;
`;



export const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-right: 2px solid white;
  border-left: 2px solid white;
  cursor: pointer;
  width: 50px;
  :hover {
    background-color: white;
    color: black;
    transition: 0.8s;
  }
`;

export const DefaultForm = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;`;


export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #34052f;
  width:30vw;
  border: none;
  outline: none;
  color:palevioletred;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
