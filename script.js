// DOM Variables
const grid = document.getElementById('grid-container');
const box = document.getElementsByClassName('box');
const resizeButton = document.getElementById('resize');
const clearButton = document.getElementById('clear');
const fillButton = document.getElementById('fill');

// Event listeners
window.addEventListener("load", gridDefault);
resizeButton.addEventListener("click", changeSize);
clearButton.addEventListener("click", eraseGrid);
fillButton.addEventListener("click", fillCanvas);

function gridDefault() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    const gridSize = document.getElementById('grid-size');
    gridSize.innerText = `Grid size: ${size} x ${size}`;
}

// Creates empty divs that will fill the "sketch pad"
function fillGrid(boxes) {
    for (let i=0; i < boxes * boxes; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.addEventListener('mouseover', changeColor);
        grid.appendChild(newBox);
    }
}

function changeColor(event) {
    const ranR = Math.floor(Math.random() * 256);
    const ranG = Math.floor(Math.random() * 256);
    const ranB = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${ranR}, ${ranG}, ${ranB})`;
}

function changeSize() {
    let newSize = prompt('How many boxes per side?')

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 128 || Number.isNaN(newSize)) {
            alert('Please enter a number between 1 and 128');
            changeSize();
        } else {
            removeGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function removeGrid() {
    Array.from(grid.childNodes).forEach((ele) => {
        grid.removeChild(ele);
    });
}

function eraseGrid() {
    for (let i=0; i < box.length; i++) {
        box[i].removeAttribute('style');
    }
}

function fillCanvas() {
    for (let i=0; i < box.length; i++) {
        const ranR = Math.floor(Math.random() * 256);
        const ranG = Math.floor(Math.random() * 256);
        const ranB = Math.floor(Math.random() * 256);
        box[i].style.backgroundColor = `rgb(${ranR}, ${ranG}, ${ranB})`;
    }
}
