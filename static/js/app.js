// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create Variables
var button = d3.select("#filter-btn")


//Function to build table
function buildTable(tableData) {
    var tbody = d3.select("tbody");
    tbody.html("");
    tableData.forEach((rowData) => {
        var row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            var cells = row.append("td");
            cells.text(value);
        });
    });
}

buildTable(tableData);

//Function to handle click and filter by date (which rebuilds table using filtered data)
function clickButton() {
    var dateTime = d3.select("#datetime").property("value");
    var filteredTable = tableData;
    filteredTable = filteredTable.filter(dataRow => dataRow.datetime === dateTime);
    buildTable(filteredTable);
}
// Click button 
button.on("click", clickButton);