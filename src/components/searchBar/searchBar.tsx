import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchText } from "../../store/slices/uiSlice";
import { motion } from "framer-motion";
import styles from "./SearchBar.module.scss";


export default function SearchBar() {
      const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.ui.searchText);
  return (
    <motion.input
      className={styles.input}
      type="text"
      value={searchText}
      placeholder="🔍 Search spells..."
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      whileFocus={{ scale: 1.03, boxShadow: "0px 0px 12px #a37dff" }}
      transition={{ type: "spring", stiffness: 150 }}
    />
  );
}
