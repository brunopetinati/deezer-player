import SearcherEngine from "../../components/songs-getter/index";
import ListSongs from "../../components/songs-list/index";
import InputSearch from "../../components/input-search/index";
import { motion } from "framer-motion";


const Home = () => {

    return (<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >    
    <InputSearch title={"Enjoy the Top World Songs by Deezer!"}/>
    <SearcherEngine />
    <ListSongs />

    </motion.div>)
}

export default Home;