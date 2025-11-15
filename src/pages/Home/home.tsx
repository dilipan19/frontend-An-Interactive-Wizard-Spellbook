import { useAppSelector } from "../../store/hooks";
import SearchBar from "../../components/searchBar";
import SortControls from "../../components/sortControls";
import SpellGrid from "../../components/spellGrid";
import styles from "./Home.module.scss";

export default function Home() {
  const searchText = useAppSelector((state) => state.ui.searchText);
  const sortBy = useAppSelector((state) => state.ui.sortBy);

  let spells = useAppSelector((state) => state.spells.allSpells);

  // MOCK SEARCH
  if (searchText.trim()) {
    spells = spells.filter((s) =>
      s.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // MOCK SORT
  if (sortBy === "alphabetical") {
    spells = [...spells].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "power") {
    spells = [...spells].sort((a, b) => b.power - a.power);
  }

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Arcane Atlas</h1>
        <p className={styles.subtitle}>Discover, Sort & Cast Magical Spells</p>
      </header>

      <section className={styles.controls}>
        <SearchBar />
        <SortControls />
      </section>

      <main className={styles.main}>
        <SpellGrid spells={spells} />
      </main>
    </div>
  );
}
