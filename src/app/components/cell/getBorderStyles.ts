import styles from './cell.module.scss';

export const getBorderStyles = (row: number, col: number): string => {
  
    const isTopOfBlock = [1, 4, 7].includes(row);
    const isBottomOfBlock = [3, 6, 9].includes(row);
    const isLeftOfBlock = [1, 4, 7].includes(col);
    const isRightOfBlock = [3, 6, 9].includes(col);
    const isRightOfThickLine = [4, 7].includes(col);  
    const isBelowThickLine = [4, 7].includes(row);  
  
    const topStyle = isTopOfBlock ? styles.top : '';
    const bottomStyle = isBottomOfBlock ? styles.bottom : '';
    const leftStyle = isLeftOfBlock ? styles.left : '';
    const rightStyle = isRightOfBlock ? styles.right : '';
    const removeLeftStyle = isRightOfThickLine ? styles.removeLeft : ''; 
    const removeTopStyle = isBelowThickLine ? styles.removeTop : ''; 
  
  return `${topStyle} ${bottomStyle} ${leftStyle} ${rightStyle} ${removeLeftStyle} ${removeTopStyle}`;
}
