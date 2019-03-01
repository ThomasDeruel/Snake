class Snake {
    constructor(table,row,column){
        this.table = table;
        this.grid = this.createGrid(row,column);
        this.render();
    }

    // à faire
    render(){
        console.log(this.table,this.grid)
    }

    createGrid (row,column) {
        const array = [];
        while(row > 0) {
            const newRow = [];
            for(let y = column; y>0; y--) {
                newRow.push(0);
            }
            array.push(newRow);
            row --;
        }
        return array;
    }
}

// start
const tableContainer = document.getElementById("table");
new Snake(table,30,30);
