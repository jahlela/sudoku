"use client";

import { useState } from 'react';
import { Cell } from '../cell';
import styles from './grid.module.scss';

const GRID_CELLS: number[] = [...Array(81)];

const getColumnCells = (col: number) => Array.from({ length: 9 }, (_, row) => row * 9 + col);
const getRowCells = (row: number) => Array.from({ length: 9 }, (_, col) => row * 9 + col);

export const Grid = () => {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  return (
    <div className={styles.wrapper}>
      {/* buttons to select all cells in the row */}
      <div className={styles.rowButtons}>
        {[...Array(9)].map((_, row) => (
          <button
            key={row}
            className={styles.rowButton}
            onClick={() => setSelectedCells(getRowCells(row))}
          >
            {row + 1}
          </button>
        ))}
      </div>

      <div className={styles.gridContainer}>
        {/* buttons to select all cells in the column */}
        <div className={styles.columnButtons}>
          {[...Array(9)].map((_, col) => (
            <button
              key={col}
              className={styles.columnButton}
              onClick={() => {
                const columnCells = getColumnCells(col);
                setSelectedCells(columnCells);
              }}
            >
              {col + 1}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {GRID_CELLS.map((_, i) => {
            const isSelected = selectedCells.includes(i);
            const handleClick = () => {
              if (isSelected) {
                setSelectedCells(selectedCells.filter(cell => cell !== i));
              } else {
                setSelectedCells([...selectedCells, i]);
              }
            };

            return (
              <Cell
                key={i}
                index={i}
                value={i + 1}
                isSelected={isSelected}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
};