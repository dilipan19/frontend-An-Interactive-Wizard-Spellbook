import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../../components/searchBar";
import SortControls from "../../components/sortControls";
import SpellGrid from "../../components/spellGrid";
import { quickSort, mergeSort, bubbleSort } from "../../utils/sorting";
import styles from "./Home.module.scss";

export default function Home() {

 const searchText = useAppSelector((state) => state.ui.searchText);
const sortBy = useAppSelector((state) => state.ui.sortBy);

const spells = useAppSelector((state) => state.spells.allSpells);

// 🔍 REAL WORKING SEARCH
const filteredSpells = spells.filter((s) =>
  s.name.toLowerCase().includes(searchText.toLowerCase())
);

// Keep filtered version for sorting
let finalSpells = filteredSpells;

// 🔽 Sorting logic
if (sortBy === "alphabetical") {
  finalSpells = quickSort(finalSpells, "name");
} else if (sortBy === "power") {
  finalSpells = mergeSort(finalSpells, "power").reverse();
} else if (sortBy === "bubble") {
  finalSpells = bubbleSort(finalSpells, "power");
}



  return (
    <motion.div 
  className={styles.home}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Wizard </h1>
        <p className={styles.subtitle}>Discover, Sort & Cast Magical Spells</p>
      </header>

      <section className={styles.controls}>
        <SearchBar />
        <SortControls />
      </section>

      <main className={styles.main}>
        <SpellGrid spells={finalSpells}/>
      </main>
    </div>
    </motion.div>
  );
}
