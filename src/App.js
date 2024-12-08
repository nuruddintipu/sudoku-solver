import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavigationBar/NavBar";
import SudokuBoard from "./components/board/SudokuBoard";
import {Col, Container, Row} from "react-bootstrap";
import SudokuButton from "./components/SudokuButton";
import ControlBoard from "./components/board/ControlBoard";
import {useState} from "react";

function App() {


    const handleControlClick = (number) => {
        console.log(`selected number: ${number}`);
    }

    const handleBoardClick = (row, col) => {
        console.log(`${row}, ${col} cell is clicked.`);
    }



    return (
        <div className="App">
            <NavBar/>
            <Container
                fluid
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ minHeight: '100vh' }} // Adjust for Navbar and Footer
            >
                <Row>
                    <Col>
                        <SudokuBoard onClick = {handleBoardClick}/>
                    </Col>
                </Row>

                <ControlBoard
                    onClick={handleControlClick}
                />
                <SudokuButton buttonText="Solve"/>
            </Container>

            <Footer/>
        </div>
    );
}

export default App;
