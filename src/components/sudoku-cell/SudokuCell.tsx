import {CellValue} from "../sudoku-board/SudokuBoard";

export interface SudokuCellProps {
    row: number;
    col: number;
    value: CellValue;
}

function SudokuCell(props: SudokuCellProps) {
    let {row, col, value} = props;
    let className = 'cell';
    if (col === 2 || col === 5) {
        className += ' thickRight';
    }
    if (row === 2 || row === 5) {
        className += ' thickBottom';
    }
    return (<td className={className}>{value}</td>);
}

export default SudokuCell;
