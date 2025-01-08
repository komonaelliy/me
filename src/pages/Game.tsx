import { useState, useEffect } from 'react';
import '../styles/game.css';

export default function Game() {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [gameActive, setGameActive] = useState(true);
  const [status, setStatus] = useState('Your turn!');
  const HUMAN = 'X';
  const AI = 'O';

  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const handleCellClick = (index: number) => {
    if (!gameActive || cells[index] !== '') return;

    const newCells = [...cells];
    newCells[index] = HUMAN;
    setCells(newCells);

    if (!checkGameEnd(newCells)) {
      setStatus("AI is thinking...");
      setTimeout(() => {
        makeAIMove(newCells);
      }, 500);
    }
  };

  const makeAIMove = (board: string[]) => {
    let bestScore = -Infinity;
    let bestMove = 0;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = AI;
        let score = minimax(board, 0, false);
        board[i] = '';
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    const newBoard = [...board];
    newBoard[bestMove] = AI;
    setCells(newBoard);
    checkGameEnd(newBoard);
  };

  const minimax = (board: string[], depth: number, isMaximizing: boolean): number => {
    const result = checkWinner(board);
    if (result === AI) return 1;
    if (result === HUMAN) return -1;
    if (result === 'tie') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = AI;
          let score = minimax(board, depth + 1, false);
          board[i] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = HUMAN;
          let score = minimax(board, depth + 1, true);
          board[i] = '';
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const checkWinner = (board: string[]): string | null => {
    for (let combo of winCombos) {
      if (board[combo[0]] && 
          board[combo[0]] === board[combo[1]] && 
          board[combo[0]] === board[combo[2]]) {
        return board[combo[0]];
      }
    }
    if (!board.includes('')) return 'tie';
    return null;
  };

  const checkGameEnd = (board: string[]): boolean => {
    const winner = checkWinner(board);
    
    if (winner === HUMAN) {
      setStatus("You win!");
      setGameActive(false);
      setTimeout(resetGame, 1500);
      return true;
    } else if (winner === AI) {
      setStatus("AI wins!");
      setGameActive(false);
      setTimeout(resetGame, 1500);
      return true;
    } else if (winner === 'tie') {
      setStatus("It's a tie!");
      setGameActive(false);
      setTimeout(resetGame, 1500);
      return true;
    }
    setStatus("Your turn!");
    return false;
  };

  const resetGame = () => {
    setCells(Array(9).fill(''));
    setGameActive(true);
    setStatus('Your turn!');
  };

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="game-container">
      <h1>Hack Tac Toe</h1>
      <div className="game-board">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="game-status">{status}</div>
    </div>
  );
}
