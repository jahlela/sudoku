"use client";

import { useState } from 'react';
import { Cell } from '../cell';
import styles from './grid.module.scss';

type Cell = number;
type Row = Cell[];
type Col = Cell[];
type Cells = Cell[];
type Grid = Row[] | Col[];

const GRID_CELLS: Grid = [...Array(81)];

const getColumnCells = (col: number) => Array.from({ length: 9 }, (_, row) => row * 9 + col);
const getRowCells = (row: number) => Array.from({ length: 9 }, (_, col) => row * 9 + col);

export const Grid = () => {
  const [selectedCells, setSelectedCells] = useState<Cells>([]);
  const [cellValues, setCellValues] = useState<Grid>(GRID_CELLS);

  const makeSelection = (
    newCells: Cells,
    isMergingSelection: boolean
  ) => {
    setSelectedCells((prev) =>
      isMergingSelection
        ? [...new Set([...prev, ...newCells])]
        : newCells
    );
  };

  return (
    <div className={styles.wrapper}>
      {/* select all cells in a row */}
      <div className={styles.rowButtons}>
        {[...Array(9)].map((_, row) => (
          <button
            key={row}
            className={styles.rowButton}
            onClick={(event) => {
              const rowCells = getRowCells(row);
              const isMerge = event.shiftKey;
              makeSelection(rowCells, isMerge);
            }}
          >
            {row + 1}
          </button>
        ))}
      </div>

      <div className={styles.gridContainer}>
        {/* select all cells in a column */}
        <div className={styles.columnButtons}>
          {[...Array(9)].map((_, col) => (
            <button
              key={col}
              className={styles.columnButton}
              onClick={(event) => {
                const columnCells = getColumnCells(col);
                const isMerge = event.shiftKey;
                makeSelection(columnCells, isMerge);
              }}
            >
              {col + 1}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {cellValues.map((_, i) => {
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