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
    return board[player === human ? --position : position] === ' ';
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

  function computersMove(board) {
    const random = Math.floor(Math.random() * (board.length - 1));
    if (isValidMove(random, computer)) {
      return random;
    } else {
      return computersMove(board);
    }
  }

  function turnsControl(position, player) {
    board[player === human ? --position : position] = player;
    displayBoard();

    if (isWinner(player)) {
      console.log(`${player} has won!\n`);
      return;
    }

    if (isBoardFull()) {
      console.log('It\'s a draw!\n');
      return;
    }

    player === human ? playerTurn(computer) : playerTurn(human);
  }

  function playerTurn(player) {
    if (player === human) {
      console.log(
        `*********************\n\nYour turn human player: ${player}\nEnter a number from 1 to 9\nto record your turn in an empty cell.\n`
      );

      prompt.start();
      prompt.get(['position'], (err, result) => {
        if (isValidMove(result.position, player)) {
          turnsControl(result.position, player);
        } else {
          console.log('\nPlease enter a valid position.\n');
          playerTurn(player);
        }
      });
    } else {
      turnsControl(computersMove(board), player);
    }
  }

  assignPlayerTokens()
  .then(displayBoard)
  .then(playerTurn);
})();