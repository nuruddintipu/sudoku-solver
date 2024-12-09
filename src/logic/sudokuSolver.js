function sudokuSolver(board) {
    // Implement the backtracking algorithm here
    const isValid = (board, row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num ||
                board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
                return false;
            }
        }
        return true;
    };

    const solve = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === null) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) {
                                return true;
                            }
                            board[row][col] = null;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    const boardCopy = JSON.parse(JSON.stringify(board));
    if (solve(boardCopy)) {
        return boardCopy;
    } else {
        return null; // Unsolvable
    }
}

export default sudokuSolver;
