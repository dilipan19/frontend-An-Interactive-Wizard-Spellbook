import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSortBy, toggleShowSteps } from "../../store/slices/uiSlice";
import styles from "./SortControls.module.scss";

export default function SortControls() {
  const dispatch = useAppDispatch();

  const sortBy = useAppSelector((state) => state.ui.sortBy);
  const showSteps = useAppSelector((state) => state.ui.showSteps);

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        <option value="">Sort By...</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="power">Power</option>
        <option value="element">Element</option>
        <option value="difficulty">Difficulty</option>
      </select>

      <div className={styles.toggleWrapper}>
        <input
          id="stepsToggle"
          type="checkbox"
          checked={showSteps}
          onChange={() => dispatch(toggleShowSteps())}
        />
        <label htmlFor="stepsToggle">Show Algorithm Steps</label>
      </div>
    </div>
  );
}
