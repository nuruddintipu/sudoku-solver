import React, {useState} from 'react';

function SudokuCell({cellValue, row, col}) {
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const styles = {
        sudokuCell: {
            background: isHovered ? '#f1f1f1' : '#fff',
            float: 'left',
            fontSize: '24px',
            fontWeight: 'bold',
            lineHeight: '34px',
            height: '34px',
            marginRight: '-1px',
            marginTop: '-1px',
            padding: '0',
            textAlign: 'center',
            width: '34px',
        },
    };

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
        <div className={getClassNames()} style={styles.sudokuCell}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            {cellValue}
        </div>
    );
}

export default SudokuCell;
