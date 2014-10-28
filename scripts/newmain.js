var matrix = [[0, 1, 0], [0, 1, 1], [0, 1, 1]];
document.addEventListener('DOMContentLoaded', function(){
  generateGrid(matrix);

  function generateGrid(matrix){
    var $table = document.querySelector('table');
    $table.innerHTML = '';
    // matrix => [0, 0, 0]
    //           [1, 1, 1]
    //           [0, 0, 0]

    matrix.forEach(function(row){ // first time, row => [0, 0, 0]
      // create a tr for the row
      var $tr = document.createElement('tr');
      row.forEach(function(cell){ // first time, cell => 0
        // cell goes into a new td
        // that td goes into a tr
        var $td = createTableCell(cell);
        $td.textContent = cell;
        $tr.appendChild($td);
        // alternative:
        // $tr.appendChild( createTableCell(cell) );
      });
      // add that tr to the table
      $table.appendChild($tr);
    });
  }

  function createTableCell(value){
    var $td = document.createElement('td');
    // Apply alive or dead class to the td
    if(value === 1){
      $td.classList.add('alive');
    } else {
      $td.classList.add('dead');
    }
    return $td;
  }

  function livingNeighborCount(x, y){
	    var neighbor1 = (x-1, y-1);
        var neighbor2 = (x-1, y);
        var neighbor3 = (x-1, y+1);
        var neighbor4 = (x, y-1);
        var neighbor5 = (x, y+1);
        var neighbor6 = (x+1, y-1);
        var neighbor7 = (x+1, y);
        var neighbor8 = (x+1, y+1);
        var total = neighbor1 + neighbor2 + neighbor3 + neighbor4 + neighbor5+ neighbor6 + neighbor7 + neighbor8;
        console.log(total);

  }

function cellValue(x, y){
	
	
	return matrix[x][y];
}

  function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
      currentRow.forEach(function(currentCell, y){
        var nextCellState = livingNeighborCount(x, y);
        // Rule 1. Less than 2 neighbors = die of loneliness
        // Rule 2. Things stay the same unless they change (inertia)
        // Rule 3. More than 3 neighbors = death by overpopulation
        // Rule 4. Exactly 3 neighbors = birth
        nextRow.push(nextCellState);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }

  document.querySelector(".tick").addEventListener('click', function(){
    // Tick button has been pressed
    matrix = calculateNextState(matrix);
    generateGrid(matrix);
  });
});