import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavigationBar/NavBar";
import SudokuSolver from "./components/SudokuSolver";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <SudokuSolver/>
            <Footer/>
        </div>
    );
}

export default App;
