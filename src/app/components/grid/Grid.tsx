import { Cell } from '../cell';
import styles from './grid.module.scss';

type Grid = { isComplete: boolean };

export const Grid = ({ isComplete = true }: Grid) => {
  const getRandomSudokuNumber = () => Math.floor(Math.random() * 9) + 1;

  return (
    <div className={styles.wrapper}>
    {isComplete && <div className={styles.overlay}>✔ Complete!</div>}

    <div className={styles.grid}>
      {[...Array(81)].map((_, i) => (
        <Cell key={i} index={i} value={getRandomSudokuNumber()} />
      ))}
    </div>
  </div>
  )
};