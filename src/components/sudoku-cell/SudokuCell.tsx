import {CellValue} from "../game/Game";

export interface SudokuCellProps {
    row: number;
    col: number;
    value: CellValue;
    updateValue: () => void;
}

function SudokuCell(props: SudokuCellProps) {
    let {row, col, value, updateValue} = props;
    let className = 'cell';
    if (col === 2 || col === 5) {
        className += ' thickRight';
    }
    if (row === 2 || row === 5) {
        className += ' thickBottom';
    }
    return (<td className={className} onClick={() => updateValue()}>{value}</td>);
}

export default SudokuCell;
