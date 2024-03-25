import React, { useRef, useEffect, useState, useCallback } from 'react';
import {Link }from 'react-router-dom';

function TicTacToe() {
  const canvasRef = useRef(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState('X');

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setNext('X');
  };

  const checkWinner = useCallback(() => {
        const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖
          [0, 4, 8], [2, 4, 6] // 斜
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
          }
        }
        return null;
      },[board]
  );

  const handleClick = event => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const row = Math.floor(y / 100);
    const col = Math.floor(x / 100);
    const index = row * 3 + col;
    if (board[index]) return;
    setBoard(prev => {
      const newBoard = [...prev];
      newBoard[index] = next;
      return newBoard;
    });
    setNext(prev => prev === 'X' ? 'O' : 'X');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'brown';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const x = j * 100;
        const y = i * 100;
        context.strokeRect(x, y, 100, 100);
        const symbol = board[i * 3 + j];
        if (symbol) {
            context.font = '48px serif'; // Set the font size
            const textWidth = context.measureText(symbol).width;
            const textHeight = 48; // This is a rough estimate
            const xCenter = x + 50 - textWidth / 2;
            const yCenter = y + 50 + textHeight / 2;
            context.fillStyle = 'Black';
            context.fillText(symbol, xCenter, yCenter);
        }
      }
    }

    //判断输赢
    const winner = checkWinner();
    if (winner) {
        alert(`Player ${winner} wins!`);
    }
  }, [board, checkWinner]);

  return (
    <div>
        <canvas ref={canvasRef} width={300} height={300} onClick={handleClick} />
        <br/>
        <button onClick={resetBoard}>RESET</button>
    </div>
  );
}

export default TicTacToe;