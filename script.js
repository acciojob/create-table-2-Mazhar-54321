function createTable() {
    //Write your code here
	let row = Number(prompt("Input number of rows"));
	let col = Number(prompt("Input number of columns"));
	const tbody = document.getElementById("tbody");
	
	for(let i=0;i<row;i++){
		const tr = document.createElement("tr");
		for(let j=0;j<col;j++){
			const td = document.createElement("td");
			td.textContent=`Row-${i} Column-${j}`
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	
  
}
