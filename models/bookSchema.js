var mongoose=require("mongoose");
var schema=mongoose.Schema;

var bookSchema=new schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    entryDate:{
        type:Date,
        default:Date.now
    }
});

mongoose.model("books",bookSchema);