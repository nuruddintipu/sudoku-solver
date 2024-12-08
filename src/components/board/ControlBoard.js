import React from "react";
import Cell from "./Cell";

function ControlBoard( { onClick }) {
    const numbers = [1,2,3,4,5,6,7,8,9];
    return (
        <div className="control-board" style={{display: 'flex' , marginTop: '20px'}}>
            {numbers.map((num) => (
                <Cell
                    key={num}
                    value={num}
                    onClick ={() => onClick(num)}
                    style={{cursor: 'pointer', background: '#eee'}}
                />
            ))}
        </div>
    );
}

export default ControlBoard;
