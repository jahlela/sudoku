import { getCoordinatesFromIndex } from '../../../lib';
import styles from './cell.module.scss';
import { getBorderStyles } from './getBorderStyles';

type Cell = { index: number; value?: number; handleClick: (event: React.MouseEvent) => void; isSelected?: boolean };

export const Cell = ({ index, value, handleClick, isSelected = false }: Cell) => {
  const { row, col, block } = getCoordinatesFromIndex(index);
  const borderStyle = getBorderStyles(row, col);
  const selectedStyle = isSelected ? styles.selected : '';
  const cellStyle = `${styles.cell} ${borderStyle} ${selectedStyle}`;


  return (
    <div
      className={cellStyle}
      data-row={row}
      data-col={col}
      data-block={block}
      onClick={(event) => handleClick(event)}
    >
      <h4>{value ?? ''}</h4>
    </div>
  )
};