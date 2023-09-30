function createBoard() {
  const board = {};

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const coord = [x, y];
      board[coord] = createNode(coord, findPossibleMoves([x, y]));
    }
  }

  return board;
}

function knightMoves(start, end) {
  const board = createBoard();
  const queue = [];

  board[start.toString()].path = [];
  queue.push(board[start.toString()]);

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode.currentCoord.toString() === end.toString())
      return currentNode.path;

    for (const move of currentNode.possibleMoves) {
      const moveKey = move.toString();
      if (!board[moveKey].visited) {
        queue.push(board[moveKey]);
        board[moveKey].visited = true;
        board[moveKey].path = [...currentNode.path, move];
      }
    }
  }
}

function createNode(currentCoord = null, possibleMoves = null) {
  const node = {};

  node.currentCoord = currentCoord;
  node.possibleMoves = possibleMoves;
  node.visited = false;

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

console.log(knightMoves([7, 0], [2, 7]));
