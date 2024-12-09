import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavigationBar/NavBar";
import SudokuBoard from "./components/board/SudokuBoard";
import {Col, Container, Row} from "react-bootstrap";
import SudokuButton from "./components/SudokuButton";
import ControlBoard from "./components/board/ControlBoard";
import {useState} from "react";
import sudokuSolver from "./logic/sudokuSolver";

function App() {
    const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(null)));

    const [focusedCell, setFocusedCell] = useState(null);

    const handleBoardClick = (row, col) => {
        setFocusedCell({row, col});
    }
    const handleControlClick = (number) => {

        if(focusedCell){
            const { row, col } = focusedCell;
            const updatedBoard = [...board];
            updatedBoard[row][col] = number; // Place the selected number in the focused cell
            setBoard(updatedBoard);
        }
    }
    const handleSolve = () =>{
        const solvedBoard = sudokuSolver([...board]);
        if(solvedBoard){
            setBoard(solvedBoard);
        }
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
                        <SudokuBoard
                            board={board}
                            focusedCell={focusedCell}
                            onCellClick={handleBoardClick}
                        />
                    </Col>
                </Row>

                <ControlBoard
                    onClick={handleControlClick}
                />
                <SudokuButton buttonText="Solve Sudoku" handleClick ={handleSolve}/>
            </Container>

            <Footer/>
        </div>
    );
}

export default App;
