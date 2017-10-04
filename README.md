# Installation

This Tic Tac Toe command line game requires [Node](https://nodejs.org/en/) and [prompt](https://www.npmjs.com/package/prompt), which is a command line prompt for Node and the sole dependency. To install, run the following command:

	npm install

## Playing the Game

Begin playing the game by running the `play` script:

	npm run play

After running the script, you'll be prompted to choose "X" or "O" as your mark.

	Which player do you want to be? X or O?
	
	prompt: token:  x
	
	You are X. The computer is O.

To make your move, enter a number from 1 to 9 that corresponds to an empty cell:

	+---+---+---+
	| 1 | 2 | 3 |
	+---+---+---+
	| 4 | 5 | 6 |
	+---+---+---+
	| 7 | 8 | 9 |
	+---+---+---+

As the human player, you'll make the first move.

        +---+---+---+
        |   |   |   |
        -------------
        |   |   |   |
        -------------
        |   |   |   |
        +---+---+---+
	
	*********************
	
	Your turn human player: X
	Enter a number from 1 to 9
	to record your turn in an empty cell.
	
	prompt: position: 1

The computer will make its move immediately after you. It chose position 3 below.

        +---+---+---+
        | X |   |   |
        -------------
        |   |   |   |
        -------------
        |   |   |   |
        +---+---+---+


        +---+---+---+
        | X |   | O |
        -------------
        |   |   |   |
        -------------
        |   |   |   |
        +---+---+---+
	
	*********************
	
	Your turn human player: X
	Enter a number from 1 to 9
	to record your turn in an empty cell.
	
	prompt: position:

Continue playing until you win, lose, or draw.

        +---+---+---+
        | X |   | O |
        -------------
        |   | X |   |
        -------------
        |   |   |   |
        +---+---+---+


        +---+---+---+
        | X |   | O |
        -------------
        |   | X |   |
        -------------
        |   | O |   |
        +---+---+---+
	
	*********************
	
	Your turn human player: X
	Enter a number from 1 to 9
	to record your turn in an empty cell.
	
	prompt: position:  9
	
        +---+---+---+
        | X |   | O |
        -------------
        |   | X |   |
        -------------
        |   | O | X |
        +---+---+---+
	
	X has won!

