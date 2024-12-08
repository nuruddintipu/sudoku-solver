import React from 'react';
import SudokuCell from './SudokuCell';

function SudokuRow ({ rowValues, rowIndex, onClick}){
    return (
        <div className="board-row"  style={{display: 'flex'}}>
            {rowValues.map((value,colIndex) => (
                <SudokuCell  key={colIndex}
                             cellValue={value}
                             row={rowIndex}
                             col={colIndex}
                             onClick ={onClick}
                />
            ))}
        </div>
    );
}

export default SudokuRow;
