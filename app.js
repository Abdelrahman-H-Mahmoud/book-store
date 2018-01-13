var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/book-store",function(err,data){
    if(err)
        console.log(err)
    else    
        console.log("db connected");
});

require('./models/bookSchema');

var bookRoutes=require('./routes/book');
//use middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/book',bookRoutes);

app.get('/', function (req, res) {
    res.send("Hello");
});




app.listen(3000, function () {
    console.log("connected");
})