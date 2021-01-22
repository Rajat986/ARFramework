const mongoose=require('mongoose');

var Student=mongoose.model('Student' , {
    name:{type:String},
    student_emailID:{type:String},
    USN:{type:String},
    repoID:{type:String}
});
module.exports={Student};