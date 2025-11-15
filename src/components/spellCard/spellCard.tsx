import { motion } from "framer-motion";
import styles from "./SpellCard.module.scss";

export default function SpellCard({ spell }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
