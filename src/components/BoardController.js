import React from "react";
import SudokuRow from "./board/SudokuRow";


export default function BoardController() {
    const boardValues = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];


    return (
        <div className="board-control">
            {(boardValues.map((row, rowIndex) => (
                <SudokuRow
                    key={rowIndex}
                    rowValues={row}
                    rowIndex={rowIndex}
                />
            )))}
        </div>
    )

}
