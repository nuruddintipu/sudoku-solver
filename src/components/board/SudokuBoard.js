import React, {useState} from 'react';
import SudokuRow from './SudokuRow';

function SudokuBoard() {
    const [hoveredValue, setHoveredValue] = useState(null);



    const boardValues = [
        [1, 2, 3, 5, 6, 7, 8, 9, 4],
        [5, 4, 6, 2, 8, 9, 1, 3, 7],
        [8, 7, 9, 3, 1, 4, 2, 5, 6],
        [6, 1, 2, 7, 9, 3, 5, 4, 8],
        [3, 8, 7, 4, 5, 6, 9, 2, 1],
        [4, 9, 5, 8, 2, 1, 6, 7, 3],
        [7, 5, 1, 9, 4, 8, 3, 6, 2],
        [9, 3, 8, 6, 7, 2, 4, 1, 5],
        [2, 6, 4, 1, 3, 5, 7, 8, 9],
    ];

    const handleMouseEnter = (value) => {
        setHoveredValue(value);
    };

    const handleMouseLeave = () => {
        setHoveredValue(null);
    };


    return (
        <div className="sudoku-board">
            {boardValues.map((row, rowIndex) => (
                <SudokuRow
                    key={rowIndex}
                    rowValues={row}
                    rowIndex={rowIndex} />
            ))}
        </div>
    );
}

export default SudokuBoard;
