const mongoose = require("mongoose")

const SignupSchema = new mongoose.Schema({

    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    rollno:{
        type: String,
        required: true,
        unique: true,
    },
    college:{
        type: String,
        required: true,
    }

})
const Signup = mongoose.model("Signup", SignupSchema)
module.exports = Signup