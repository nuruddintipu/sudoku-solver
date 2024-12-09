import {Col, Container, Row} from "react-bootstrap";
import SudokuBoard from "./board/SudokuBoard";
import ControlBoard from "./board/ControlBoard";
import SudokuButton from "./SudokuButton";
import {useState} from "react";
import useBoardHistory from "./useBoardHistory";
import sudokuSolver from "../logic/sudokuSolver";

function SudokuSolver() {

    const initialBoard = Array(9).fill().map(() => Array(9).fill(null));

    const [focusedCell, setFocusedCell] = useState(null);

    const {currentBoard: board, updateBoard, undo, canUndo} = useBoardHistory(initialBoard);


    const handleBoardClick = (row, col) => {
        setFocusedCell({row, col});
    };


    const handleControlClick = (number) => {
        if (focusedCell) {
            const {row, col} = focusedCell;
            const updatedBoard = [...board].map(row => [...row]);
            updatedBoard[row][col] = number;

            updateBoard(updatedBoard);
        }
    };

    const handleSolve = () => {
        const solvedBoard = sudokuSolver([...board]);
        if (solvedBoard) {
            updateBoard(solvedBoard);
        }
    };


    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center flex-column"
            style={{minHeight: '100vh'}} // Adjust for Navbar and Footer
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
            <div className="buttons">
                <SudokuButton
                    buttonText="Undo"
                    handleClick={undo}
                    disabled={!canUndo}
                />
                <SudokuButton buttonText="Solve Sudoku" handleClick={handleSolve}/>
            </div>
        </Container>
    );
}

export default SudokuSolver;