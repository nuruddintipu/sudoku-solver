import React from "react";
import {Button} from 'react-bootstrap';



function SolveButton({ buttonText }) {
    return (
      <Button size="lg" variant="outline-primary">{ buttonText }</Button>
    );
}

export default SolveButton;