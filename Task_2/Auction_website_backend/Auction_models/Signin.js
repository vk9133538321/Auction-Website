const mongoose = require("mongoose")

const SigninSchema = new SigninSchema({

    
    rollno:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
})
const Signin = mongoose.model("Signin", SigninSchema)
module.exports = Signin