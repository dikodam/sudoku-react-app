import './SudokuBoard.css';
import SudokuRow from "../sudoku-row/SudokuRow";
import {useState} from "react";

export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

function SudokuBoard() {
    let initialState: Array<Array<CellValue>> = Array(9).fill(Array<CellValue>(9).fill(null));
    let [gameState, setGameState] = useState(initialState);
    return (
        <table className={'sudokuBoard'}>
            <tbody>
            {gameState.map((row, index) => <SudokuRow key={`tr-${index}`} row={row} rowIndex={index}/>)}
            </tbody>
        </table>
    );
}

export default SudokuBoard;