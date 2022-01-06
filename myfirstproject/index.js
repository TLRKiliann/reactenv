//To get json file

//The fetch API is only accessible in the web environment.
/*
fetch("./data.json")
.then(response => response.json())
.then(jsonObject => console.log(jsonObject));
*/

const data = require('./data.json');
console.log(data);
