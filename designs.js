const sizePicker = document.querySelector('.size-picker');
const submitButton = document.querySelector('.submit-button');
const pixelCanvas = document.querySelector('.pixel-canvas');

function makeGrid() {
  let gridHeight = document.querySelector('.input-height').value;
  let gridWidth = document.querySelector('.input-width').value;
  // If grid is already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // fills in cell(s) with selected color upon click
      gridCell.addEventListener('click', function() {
        const color = document.querySelector('.color-picker').value;
        event.target.style.backgroundColor = color;
      })
     }
  }
}

// Upon user's submitting height and width selections, callback function (inside method) calls makeGrid function. But event method preventDefault() first intercepts the 'submit' event, which would normally submit the form and refresh the page, preventing makeGrid() from being processed.
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});
