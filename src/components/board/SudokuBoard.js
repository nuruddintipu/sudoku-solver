import React, {useState} from 'react';
import SudokuRow from './SudokuRow';

function SudokuBoard({onClick}) {
    const defaultStyle = {

        sudokuBoard: {
            display: 'grid',
            width: '360px',
            height: '360px',
        }
    }

    const defaultGrid = Array(9).fill().map(() => Array(9).fill(null));

    return (
        <div style={defaultStyle.sudokuBoard}>
            {defaultGrid.map((row, rowIndex) => (
                <SudokuRow
                    key={rowIndex}
                    rowValues={row}
                    rowIndex={rowIndex}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}

export default SudokuBoard;
