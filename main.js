let express = require("express");
let PORT = 8001;

let app = express();
app.use(express.json()); 

let routes = require("./routes");
app.use(routes);

// app.get("/hello", function(req, res){
//     console.log("In GET /hello");
//     resizeBy.json("Hello there.")
//   });

app.listen(PORT, function(){
    console.log("Application started on port", PORT);
  });