import Routes from "./routes/index"
import Header from "./components/header"
import Player from "./components/player"
import ImageComponent from "./components/image"

import { DefaultContainer} from "./styles/index"

function App() {
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
