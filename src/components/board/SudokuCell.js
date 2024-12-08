import React, {useState} from 'react';
import Cell from "./Cell";



function SudokuCell({cellValue, row, col, onClick}) {

    const getClassNames = () => {
        let classNames = "sudoku-cell";
        if (row % 3 === 0 && row !== 0) classNames += " top-border";
        if ((row + 1) % 3 === 0 && row !== 8) classNames += " bottom-border";
        if (col % 3 === 0 && col !== 0) classNames += " left-border";
        if ((col + 1) % 3 === 0 && col !== 8) classNames += " right-border";
        if (row === 0) classNames += " outer-top-border";
        if (row === 8) classNames += " outer-bottom-border";
        if (col === 0) classNames += " outer-left-border";
        if (col === 8) classNames += " outer-right-border";

        return classNames;
    }


    return (
        <div className={getClassNames()}  style={{display: 'flex'}}
        >
            <Cell
                type='text'
                maxLength={1}
                onClick={()=> onClick(row, col)}
            />
        </div>
    );
}

export default SudokuCell;
