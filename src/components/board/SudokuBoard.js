import React, {useState} from 'react';
import SudokuRow from './SudokuRow';

function SudokuBoard({ onClick }) {


    const defaultGrid = Array(9).fill().map(() => Array(9).fill(null));

    return (
        <div className="sudoku-board">
            {defaultGrid.map((row, rowIndex) => (
                <SudokuRow
                    key={rowIndex}
                    rowValues={row}
                    rowIndex={rowIndex}
                    onClick ={onClick}
                />
            ))}
        </div>
    );
}

export default SudokuBoard;
