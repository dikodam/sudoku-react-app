import SudokuCell from "../sudoku-cell/SudokuCell";
import {CellValue} from "../sudoku-board/SudokuBoard";


interface SudokuRowProps {
    row: Array<CellValue>;
    rowIndex: number;
}

function SudokuRow(props: SudokuRowProps) {
    let {row, rowIndex} = props;
    return <tr>
        {row.map((cellValue, colIndex) =>
            <SudokuCell key={`cell-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        value={cellValue}/>)}
    </tr>;
}

export default SudokuRow;