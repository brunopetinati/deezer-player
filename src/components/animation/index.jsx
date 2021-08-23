import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    ></motion.div>
  );
};

export default Animation;