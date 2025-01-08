const WIN_COMBOS = [
    // Horizontal
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    // Vertical
    [0, 5, 10],
    [1, 6, 11],
    [2, 7, 12],
    [3, 8, 13],
    [4, 9, 14],
    // Diagonal
    [0, 6, 12],
    [2, 6, 10],
    [4, 8, 12],
    [2, 8, 14]
  ];
  
  export function checkWinner(board: string[]): string | null {
    for (let combo of WIN_COMBOS) {
      const first = board[combo[0]];
      if (first && combo.every(index => board[index] === first)) {
        return first;
      }
    }
    return board.includes('') ? null : 'tie';
  }
  
  export function makeAIMove(board: string[]): number {
    let bestScore = -Infinity;
    let bestMove = 0;
  
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        let score = minimax(board, 0, false);
        board[i] = '';
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  }
  
  function minimax(board: string[], depth: number, isMaximizing: boolean): number {
    const winner = checkWinner(board);
    if (winner === 'O') return 1;
    if (winner === 'X') return -1;
    if (winner === 'tie') return 0;
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = 'O';
          bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
          board[i] = '';
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = 'X';
          bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
          board[i] = '';
        }
      }
      return bestScore;
    }
  }
  