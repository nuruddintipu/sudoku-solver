import React from "react";


function NavBar() {

    const styles = {
        container: {
            backgroundColor: '#222',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginTop: '10px',
            marginBottom: '10px',
            fontSize: '15px',
            fontWeight: '500',
            padding: '10px',
            color: '#fff'
        },
        menu: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '40px'
        }
    };
    return (
        <div style={styles.container}>
            <div>
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


