let express = require("express");
let PORT = 8004;

let app = express();

let jsonParser = express.json();

app.use(express.json()); 

let routes = require("./routes");
app.use(routes);








app.get("/hello", function(req, res){
    res.json("Hello there.");
});

app.listen(PORT, function(){
    console.log("Application started on port", PORT); 
});
