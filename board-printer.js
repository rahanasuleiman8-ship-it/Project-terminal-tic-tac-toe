/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
	const formatCell = (cell) => (cell === "_" ? " " : cell);

	console.log(
		` ${formatCell(board[0][0])} | ${formatCell(board[0][1])} | ${formatCell(board[0][2])} `,
	);
	console.log("=================");
	console.log(
		` ${formatCell(board[1][0])} | ${formatCell(board[1][1])} | ${formatCell(board[1][2])} `,
	);
	console.log("=================");
	console.log(
		` ${formatCell(board[2][0])} | ${formatCell(board[2][1])} | ${formatCell(board[2][2])} `,
	);
	console.log("=================");
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
