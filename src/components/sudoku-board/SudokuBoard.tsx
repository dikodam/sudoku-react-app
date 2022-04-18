import './SudokuBoard.css';
import SudokuRow from "../sudoku-row/SudokuRow";
import {useState} from "react";
import {CellValue} from "../game/Game";

interface SudokuBoardProps {
    selectedNumber: CellValue;
}

function SudokuBoard(props: SudokuBoardProps) {
    let {selectedNumber} = props;
    let initialState: Array<Array<CellValue>> = Array(9).fill(Array<CellValue>(9).fill(null));
    let [gameState, setGameState] = useState<Array<Array<CellValue>>>(initialState);

    const handleUpdate = (row: number) => {
        return (col: number) => {
            return () => {
                let newState = [...gameState];
                newState[row][col] = selectedNumber;
                setGameState(gameState);
            }
        };
    }

    return (
        <table className={'sudokuBoard'}>
            <tbody>
            {gameState.map((row, rowIndex) =>
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