const wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 50),
  rows = Math.floor(document.body.clientHeight / 50);
const colors = [
  "rgb(100, 30, 5)",
  "rgb(9, 32, 7)",
  "rgb(50, 100, 200)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(150, 75, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)"
];
let count = -1

const handleOnClick = (index) => {
  count = count + 1

  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    })
  })
}

const createTile = index => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index)
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  })
}

const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  console.log(columns, rows);

  wrapper.style.setProperty('--columns', columns);
  wrapper.style.setProperty('--rows', rows);

  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();