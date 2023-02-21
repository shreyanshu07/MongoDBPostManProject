const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email : {
        type:String,
        required:true,
        minlength:3,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:String,
        min:10,
        max:15,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true
    }
})
//we will create a new collection

const Student=new mongoose.model('Student',studentSchema);
module.exports=Student

