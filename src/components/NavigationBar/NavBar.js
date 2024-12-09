import React from "react";


function NavBar() {

    const styles = {
        container: {
            backgroundColor: '#eaeaea',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            fontSize: '15px',
            fontWeight: '500',
            padding: '10px',
            color: '#222'
        },
        brand:{
            cursor: 'pointer'
        },
        menu: {
            cursor: 'pointer',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '40px'
        }
    };
    return (
        <div style={styles.container}>
            <div style={styles.brand}>
                Sudoku
            </div>
            <div style={styles.menu}>
                <div>Game</div>
                <div>Solver</div>
            </div>
        </div>
    );
}

export default NavBar;


