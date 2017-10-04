const prompt = require('prompt');

(function() {
  const WINNING_COMBOS = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      human, computer;

  function assignPlayerTokens() {
    return new Promise((resolve, reject) => {
      const schema = {
        properties: {
          token: {
            pattern: /(^[xXoO])/,
            message: 'Please choose X or O.\n',
            required: true
          }
        }
      };
  
      console.log('Which player do you want to be? X or O?\n');
      prompt.start();
      prompt.get(schema, (err, result) => {
        human = result.token.toUpperCase().trim();
        computer = human === 'X' ? 'O' : 'X';
        resolve(human);
        console.log(`\nYou are ${human}. The computer is ${computer}.\n`);
      });
    });
  }

  function displayBoard() {
    return new Promise((resolve, reject) => {
      console.log(
        `\n        +---+---+---+
        | ${board[0]} | ${board[1]} | ${board[2]} |
        -------------
        | ${board[3]} | ${board[4]} | ${board[5]} |
        -------------
        | ${board[6]} | ${board[7]} | ${board[8]} |
        +---+---+---+\n`
      );
      resolve(human);
    });
  }

  function isValidMove(position, player) {
    return board[player === human ? position - 1 : position] === ' ';
  }

  function isBoardFull() {
    return board.indexOf(' ') === -1;
  }

  function isWinner(player) {
    let i, combo;
    const length = WINNING_COMBOS.length;

    for (i = 0; i < length; i++) {
      combo = WINNING_COMBOS[i];
      if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== ' ') {
        return true;
      };
    }
    return false;
  }
})();