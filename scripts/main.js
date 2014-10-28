function matrixCreator(x,y){
	var matrix = [];
	for(var i=0; i<x; i++){
		matrix[i] = [];
		for(var j=0; j<y; j++){
			matrix[i][j] = Math.round(Math.random());
			//if(matrix[i][j] === 1){
				//display the color black in the cell
			//}else{
				//display the color white in the cell
			//}
		}
	}
	return matrix;
}

document.addEventListener("DOMContentLoaded", function buildTable(){
	var table = document.querySelector('.table');
	var matrix = matrixCreator(3, 3);
	var row;
	for(var i=0; i<matrix.length; i++){
		row = matrix[i];
		var tr = document.createElement("tr");
		for(var j=0; j<row.length; j++){
			item = row[j];
			var td = document.createElement("td");
			td.textContent = item;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
	function createTableCell(value){
	var $td = document.createElement('td');
	$td.textContent = value;
	if(value === 1){
		$td.classList.add('alive');
	} else {
		$td.classList.add('dead');
	}
	return $td;
}
});
