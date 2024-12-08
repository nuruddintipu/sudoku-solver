import React, {useState} from 'react';

function SudokuBoard({  board, focusedCell, onCellClick  }) {


    const getClassNames = (row, col) => {
        let classNames = "sudoku-cell";
        if (row % 3 === 0 && row !== 0) classNames += " top-border";
        if ((row + 1) % 3 === 0 && row !== 8) classNames += " bottom-border";
        if (col % 3 === 0 && col !== 0) classNames += " left-border";
        if ((col + 1) % 3 === 0 && col !== 8) classNames += " right-border";
        if (focusedCell?.row === row && focusedCell?.col === col) {
            classNames += " focused";
        }
        return classNames;
    };


    const defaultStyle = {
        sudokuBoard: {
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 1fr)',
            gridTemplateRows: 'repeat(9, 1fr)',
            width: '360px',
            height: '360px',
            border: '2px solid black',
        },
        cell: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            border: '1px solid #999',
            cursor: 'pointer',
            background: '#fff',
        },
        focused: {
            background: '#c5d7fa',
        },
    };

    return (
        <div style={defaultStyle.sudokuBoard}>
            {board.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={getClassNames(rowIndex, colIndex)}
                        style={{
                            ...defaultStyle.cell,
                            ...(focusedCell?.row === rowIndex && focusedCell?.col === colIndex
                                ? defaultStyle.focused
                                : {}),
                        }}
                        onClick={() => onCellClick(rowIndex, colIndex)}
                    >
                        {value}
                    </div>
                ))
            )}
        </div>
    );
}

export default SudokuBoard;