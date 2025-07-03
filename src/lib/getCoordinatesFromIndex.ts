
export type coordinates = {
  row: number;
  col: number;
  block: number;
}

/**
 * Convert a zero-based linear index (0 … 80) into
 * 1-based Sudoku coordinates: row, column, and 3×3 block.
 *
 *  i = 0   →  { row: 1, col: 1, block: 1 }
 *  i = 35  →  { row: 3, col: 8, block: 5 }
 *  i = 80  →  { row: 9, col: 9, block: 9 }
 */
export const getCoordinatesFromIndex = (index: number): coordinates => {
  const row_0   = Math.floor(index / 9);
  const col_0  = index % 9;
  const block_0 = Math.floor(row_0 / 3) * 3 + Math.floor(col_0 / 3);

  return {
    row:   row_0 + 1,
    col:   col_0 + 1,
    block: block_0 + 1,
  };
};
