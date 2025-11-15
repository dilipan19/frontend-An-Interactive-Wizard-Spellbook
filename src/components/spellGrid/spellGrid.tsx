import SpellCard from "../spellCard";
import styles from "./SpellGrid.module.scss";

export default function SpellGrid({ spells }) {
  return (
    <div className={styles.grid}>
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
}
