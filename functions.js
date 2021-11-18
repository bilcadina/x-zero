let canvas;
let toggle = true;
let board = [[], [], []];
const SIZE = 3;

setTimeout(() => main(), 10);

function main() {
  canvas = document.getElementById("canvas");
  insertTiles();
}

function insertTiles() {
  for (let rowI = 0; rowI < SIZE; rowI++) {
    canvas.innerHTML += `<div id="row-${rowI}" class="row"></div>`;
    const row = document.getElementById(`row-${rowI}`);
    for (let colI = 0; colI < SIZE; colI++) {
      insertTile(row, rowI, colI);
    }
  }
}

function insertTile(row, rowI, colI) {
  row.innerHTML += `<div id="cell-${rowI}-${colI}" class="cell" onclick="tileClick(this)"></div>`;
  const cell = document.getElementById(`cell-${rowI}-${colI}`);
  cell.setAttribute("row", rowI);
  cell.setAttribute("col", colI);
}

function tileClick(cell) {
  console.log(cell);
  cell.style.background = "#ddedb9";
  if (cell.innerText === "") {
    setText(cell);
  }
}

function setText(cell) {
  const rowI = cell.getAttribute("row");
  const colI = cell.getAttribute("col");
  if (toggle === true) {
    cell.innerText = "X";
    board[rowI][colI] = 1;
    toggle = false;
  } else {
    cell.innerText = "0";
    toggle = true;
    board[rowI][colI] = 0;
  }
  console.log("board: ", board);
}
