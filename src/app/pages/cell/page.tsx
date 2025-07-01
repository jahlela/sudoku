import styles from './cell.module.css';

type Cell = { value: number; selected?: boolean };

export const Cell = ({ value, selected = false }: Cell) => (
  <div className={`${styles.cell} ${selected ? styles.selected : ''}`}>
    <p>I am a cell</p>
    <h4>{value}</h4>
  </div>
);