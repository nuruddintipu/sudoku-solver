import React from "react";
import {Button} from 'react-bootstrap';



function SudokuButton({ buttonText }) {

    const styles = {
        button:{
            marginTop: '10px',
        }
    };
    return (
      <Button style={styles.button} size="lg" variant="outline-primary">{ buttonText }</Button>
    );
}

export default SudokuButton;