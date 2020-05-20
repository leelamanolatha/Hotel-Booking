var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NameInfo = new Schema({
    session_id:{
        type:String,
        required:true
    },
name:{
 type:String,
 required:true
},
number:{
    type:Number,
    required:true
},
date:{
    type: Date,
    required: true
}

});
module.exports = mongoose.model('NameInfo', NameInfo);