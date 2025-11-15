import { motion } from "framer-motion";
import styles from "./spellCard.module.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SpellCard({ spell }) {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      <h3>{spell.name}</h3>
      <p>{spell.description}</p>

      <div className={styles.meta}>
        <span>{spell.element}</span>
        <span>Power: {spell.power}</span>
      </div>

      <button className={styles.castBtn}>Cast Spell</button>
    </motion.div>
  );
}
