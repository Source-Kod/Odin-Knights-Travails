function createBoard() {
  const board = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board.push(createNode([x, y], findPossibleMoves([x, y])));
    }
  }
  return board;
}

function knightMoves(start, end) {}

function createNode(currentCoord = null, possibleMoves = null) {
  const node = {};

  node.currentCoord = currentCoord;
  node.possibleMoves = possibleMoves;

  return node;
}

function findPossibleMoves(currentCoord) {
  const possibleMoves = [];

  const moves = [
    [currentCoord[0] - 2, currentCoord[1] + 1],
    [currentCoord[0] - 2, currentCoord[1] - 1],
    [currentCoord[0] + 1, currentCoord[1] + 2],
    [currentCoord[0] - 1, currentCoord[1] + 2],
    [currentCoord[0] + 2, currentCoord[1] + 1],
    [currentCoord[0] + 2, currentCoord[1] - 1],
    [currentCoord[0] + 1, currentCoord[1] - 2],
    [currentCoord[0] - 1, currentCoord[1] - 2],
  ];

  for (const move of moves) {
    if (checkIfMoveIsOnBoard(move)) possibleMoves.push(move);
  }

  return possibleMoves;
}

function checkIfMoveIsOnBoard(coord) {
  if (coord[0] > 7 || coord[0] < 0) return false;
  if (coord[1] > 7 || coord[1] < 0) return false;
  return true;
}

findPossibleMoves([0, 3]);
