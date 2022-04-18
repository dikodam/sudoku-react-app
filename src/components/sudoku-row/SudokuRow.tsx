import SudokuCell from "../sudoku-cell/SudokuCell";
import {CellValue} from "../game/Game";

interface SudokuRowProps {
    row: CellValue[];
    rowIndex: number;
    updateCol: (col: number) => () => void;
}

function SudokuRow(props: SudokuRowProps) {
    let {row, rowIndex, updateCol} = props;
    return <tr>
        {row.map((cellValue, colIndex) =>
            <SudokuCell key={`cell-${colIndex}`}
                        row={rowIndex}
                        col={colIndex}
                        value={cellValue}
                        updateValue={updateCol(colIndex)}
            />)}
    </tr>;
}

export default SudokuRow;