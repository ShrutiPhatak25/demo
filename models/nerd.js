var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var nerdSchema=new mongoose.Schema({
     name:{type:String,default:''}
});
mongoose.model('Nerds',nerdSchema);