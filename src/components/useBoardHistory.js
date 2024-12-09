import { useState } from "react";

function useBoardHistory(initialBoard) {
    const [boardHistory, setBoardHistory] = useState([initialBoard]);
    const [currentState, setCurrentState] = useState(0);

    const currentBoard = boardHistory[currentState];

    const updateBoard = (newBoard) => {
        const newHistory = [...boardHistory.slice(0, currentState + 1), newBoard];
        setBoardHistory(newHistory);
        setCurrentState(newHistory.length - 1);
    };

    const undo = () => {
        if (currentState > 0) {
            setCurrentState((prev) => prev - 1);
        }
    };

    return { currentBoard, updateBoard, undo, canUndo: currentState > 0 };
}

export default useBoardHistory;
