//import mongoose

const mongoose = require('mongoose')

//create schema 
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    language: {
        type: String,
        require:true
    },
    github: {
        type: String,
        require:true
    },
    website: {
        type: String,
        require:true
    },
    overview: {
        type: String,
        require:true
    },
    image: {
        type: String,
        require:true
    },
    userId:{
        type: String,
        require:true
    }


})

//create model

const projects = mongoose.model("projects",projectSchema)


//export modal

module.exports = projects
