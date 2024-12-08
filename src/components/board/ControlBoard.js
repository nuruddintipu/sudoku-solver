import React from "react";

function ControlBoard( { onClick }) {
    const numbers = [1,2,3,4,5,6,7,8,9];

    const defaultStyle = {
        cell: {
            width: '40px',
            height: '40px',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '34px',
            fontWeight: 'bold',
            border: '1px solid #999',
            boxSizing: 'border-box',
            cursor: 'pointer',
        }
    };

    return (
        <div className="control-board" style={{display: 'flex' , marginTop: '20px'}}>
            {numbers.map((num) => (
                <div
                    key={num}
                    value={num}
                    onClick ={() => onClick(num)}
                    style={{...defaultStyle.cell}}
                >
                    {num}
                </div>
            ))}
        </div>
    );
}

export default ControlBoard;
