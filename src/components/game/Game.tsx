import SudokuBoard from "../sudoku-board/SudokuBoard";
import SelectorPanel from "../selector-panel/SelectorPanel";
import {useState} from "react";


export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

function Game() {
    const [selectedNumber, setSelectedNumber] = useState<CellValue>(null);

    return (<>
        <SudokuBoard selectedNumber={selectedNumber}/>
        <SelectorPanel selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </>);
}

export default Game;