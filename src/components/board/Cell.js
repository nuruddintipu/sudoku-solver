import React from 'react';


function Cell({value, onClick}) {
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
      <div
          style={defaultStyle.cell}
          onClick={onClick}
      >
          {value}
      </div>
    );


}



export default Cell;