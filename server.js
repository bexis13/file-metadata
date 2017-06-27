const express    = require("express"),
      router     = require("./routes/routes"),
      app        = express(),
      path       = require("path"),
      cors       = require("cors"),
      bodyParser = require("body-parser"),
      multer     = require("multer");
      
//app config
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);


app.listen(port, ()=>{
    console.log("app is listening on port");
})
