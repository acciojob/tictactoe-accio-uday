const submitBtn = document.getElementById('submit');
const board = document.getElementById('board');
const message = document.querySelector('.message');

let player1 = '';
let player2 = '';
let currentPlayer = '';
let currentSymbol = '';
let gameActive = false;
const cells = document.querySelectorAll('.cell');

// Winning combinations
const winningCombinations = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
];

// Setup when submit clicked
submitBtn.addEventListener('click', () => {
	player1 = document.getElementById('player1').value.trim();
	player2 = document.getElementById('player2').value.trim();

	if(player1 === '' || player2 === '') {
		alert('Please enter names for both players.');
		return;
	}

	currentPlayer = player1;
	currentSymbol = 'x';
	gameActive = true;

	message.textContent = `${currentPlayer}, you're up`;
	board.style.display = 'grid';
});

// Cell click handler
cells.forEach(cell => {
	cell.addEventListener('click', () => {
		if (!gameActive || cell.textContent !== '') return;

		cell.textContent = currentSymbol;
		if (checkWin(currentSymbol)) {
			message.textContent = `${currentPlayer} congratulations you won!`;
			gameActive = false;
			return;
		}

		// Switch player
		if(currentPlayer === player1){
			currentPlayer = player2;
			currentSymbol = 'o';
		} else {
			currentPlayer = player1;
			currentSymbol = 'x';
		}

		message.textContent = `${currentPlayer}, you're up`;
	});
});

// Check for winning condition
function checkWin(symbol) {
	return winningCombinations.some(combination => {
		return combination.every(id => {
			const cell = document.getElementById(id);
			return cell.textContent === symbol;
		});
	});
}







