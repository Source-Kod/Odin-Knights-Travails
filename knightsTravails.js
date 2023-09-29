function createBoard() {
  const board = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board.push([x, y]);
    }
  }
  return board;
}

function knightMoves(start, end) {}

console.log(createBoard());
