import Routes from "./routes/index"
import Header from "./components/header"
import Player from "./components/player"
import ImageComponent from "./components/image"

import { useEffect } from "react"

import { DefaultContainer} from "./styles/index"

function App() {
  
  useEffect(() => {
    document.title = "Deezer App"
  }, []);
  
  return (

    <>
    <ImageComponent />
    <Header />
    <DefaultContainer>
      <Routes />
    </DefaultContainer>
    <Player />
    </>
  );
}

export default App;
