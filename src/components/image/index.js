import { Image } from "./style"
import { useSelector } from "react-redux"


const ImageComponent = () => {

    const currentSong = useSelector((state) => state.current_song.song);
    const currentImage = useSelector((state) => state.current_song.image);
    

    return (

        <Image src={currentImage} alt={currentSong}/>   

    )

};

export default ImageComponent
