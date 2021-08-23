import { useHistory } from "react-router-dom";
import { HeaderStyle, HeaderButton } from "./styles";

const Header = () => {

    const history = useHistory(); 

    return (
    
    <HeaderStyle>

        <HeaderButton onClick={() => history.push("/") }>Home</HeaderButton>
        <HeaderButton onClick={() => history.push("/mysongs") }>My Songs</HeaderButton>
        <HeaderButton onClick={() => history.push("/login") }>Login</HeaderButton>
        <HeaderButton onClick={() => history.push("/register") }>Register</HeaderButton>

    </HeaderStyle>)
}

export default Header;

