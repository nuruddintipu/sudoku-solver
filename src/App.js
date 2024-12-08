import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavigationBar/NavBar";
import SudokuBoard from "./components/board/SudokuBoard";
import {Col, Container, Row} from "react-bootstrap";
import SolveButton from "./components/Button";

function App() {
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
                        <SudokuBoard/>
                    </Col>
                </Row>
                <SolveButton buttonText="Solve"/>
            </Container>


            <Footer/>
        </div>
    );
}

export default App;
