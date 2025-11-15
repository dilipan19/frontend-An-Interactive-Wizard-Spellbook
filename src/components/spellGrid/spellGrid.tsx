import { motion } from "framer-motion";
import SpellCard from "../spellCard";
import styles from "./spellGrid.module.scss";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

export default function SpellGrid({ spells }) {
  return (
    <motion.div 
    key={spells.length} 
      className={styles.grid}
      variants={gridVariants}
      initial="hidden"
      animate="show"
    >
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </motion.div>
  );
}
