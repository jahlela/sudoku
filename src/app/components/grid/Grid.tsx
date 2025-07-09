"use client";

import { useState } from 'react';

import { Cell } from '../cell';
import styles from './grid.module.scss';

type Grid = { isComplete: boolean };

const getRandomSudokuNumber = () => Math.floor(Math.random() * 9) + 1;

export const Grid = ({ isComplete = true }: Grid) => {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  return (
    <div className={styles.wrapper}>
    {isComplete && <div className={styles.overlay}>✔ Complete!</div>}

    <div className={styles.grid}>
      {[...Array(81)].map((_, i) => {
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
            value={getRandomSudokuNumber()}
            isSelected={isSelected}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  </div>
  )
};