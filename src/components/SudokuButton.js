import React from "react";
import {Button} from 'react-bootstrap';



function SudokuButton({ buttonText, handleClick }) {

    const styles = {
        button:{
            marginTop: '10px',
        }
    };
    return (
      <Button
          style={styles.button}
          size="lg"
          variant="outline-primary"
          onClick={handleClick}
      >
          { buttonText }

      </Button>
    );
}

export default SudokuButton;