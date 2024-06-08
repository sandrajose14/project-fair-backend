//  import mongoose

const mongoose = require('mongoose')

//import validator
const validator = require("validator")

// create schema - need to use schema class in mongoose

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require:true,
        min:['3','must be atleast 3 charector, got only {value}']
    },
    email : {
        type: String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid')
            }
        }
    },
    password : {
        type:String,
        require:true
    },
    github : {
        type:String
    },
    linkedin : {
        type:String
    },
    profile : {
        type:String
    }
})

// create modal

const users = mongoose.model("users", userSchema)

// export modal

module.exports = users