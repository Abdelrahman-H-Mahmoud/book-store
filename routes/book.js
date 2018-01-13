var express=require('express');
var router=express.Router();

var mongoose=require('mongoose');

const BookModel= mongoose.model('books');


router.get('/', function (req, res) {
    BookModel.find({},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.render('index', {
                title: "Welcom To My BookStore",
                booksData: data
            });
        }
    });
});
router.get('/add', function (req, res) {
    res.render('add');
});
router.post('/', function (req, res) {
    var book = {
        "name": req.body.name,
        "title": req.body.title,
        "price": parseInt(req.body.price)
    };
    
    new BookModel(book).save(function(err,data){
        if(err)
            console.log(err);
        else{
            console.log(data);
            res.redirect('/book');
        }
    });
    //books.push(book);
});

router.get('/:id', function (req, res) {
    BookModel.findById(req.params.id,function(err,data){
        res.json(data);
    });
});

router.delete('/:id',function(req,res){
    BookModel.findByIdAndRemove(req.params.id,function(err){
        res.send('deleted');
    });    
});

router.get('/edit/:id',function(req,res){
    BookModel.findById(req.params.id,function(err,data){
        res.render('update',{book:data});
    });
});
router.put('/',function(req,res){
    BookModel.findById(req.body.id,function(err,item){
        if(err)
            console.log(err);
        else{
            item.name=req.body.name;
            item.price=req.body.price;
            item.title=req.body.title;
            item.save();

            res.json(item);
        }
    });
});

module.exports=router;