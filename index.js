var fs = require('fs');
  
// json file with the data
var data = fs.readFileSync('myapi.json');
  
var elements = JSON.parse(data);
const express = require("express");
const app = express();
var port = process.env.PORT || 8000;
// To solve the cors issue
const cors=require('cors');
   
app.listen(port, 
    () => console.log("Server Start at the Port" + port));
   
app.use(express.static('public'));
app.use(cors());

app.get('/elements', alldata);
  
function alldata(request, response) {
      
    // Returns all information about the elements
    response.send(elements);
}
