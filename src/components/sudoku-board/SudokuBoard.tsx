import './SudokuBoard.css';
import SudokuRow from "../sudoku-row/SudokuRow";
import {useState} from "react";
import {CellValue} from "../game/Game";
import {chunks} from "../../util/Util";

interface SudokuBoardProps {
    selectedNumber: CellValue;
}

function SudokuBoard(props: SudokuBoardProps) {
    let {selectedNumber} = props;
    let [gameState, setGameState] = useState<CellValue[]>(Array(9 * 9).fill(null));

    const handleUpdate = (row: number) => {
        return (col: number) => {
            return () => {
                console.log("setting new game state");
                let newState = [...gameState];
                console.log("new game state: ", {newState});
                newState[row * 9 + col] = selectedNumber;
                setGameState(newState);
            }
        };
    }
    let rows: CellValue[][] = [...chunks(gameState, 9)];
    return (
        <table className={'sudokuBoard'}>
            <tbody>
            {rows.map((row, rowIndex) =>
                <SudokuRow
                    key={`tr-${rowIndex}`}
                    row={row}
                    rowIndex={rowIndex}
                    updateCol={handleUpdate(rowIndex)}
                />)}
            </tbody>
        </table>
    );
}

export default SudokuBoard;