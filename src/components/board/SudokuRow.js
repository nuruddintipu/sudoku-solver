import React from 'react';
import SudokuCell from './SudokuCell';

function SudokuRow ({ rowValues, rowIndex }){
    return (
        <div className="board-row">
            {rowValues.map((value,colIndex) => (
                <SudokuCell  key={colIndex}
                             cellValue={value}
                             row={rowIndex}
                             col={colIndex}
                />
            ))}
        </div>
    );
}

export default SudokuRow;
