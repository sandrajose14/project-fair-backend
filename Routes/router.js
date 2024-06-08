// path to resolve the client

// 1) import express

const express = require('express')

// import controller

 const userController = require('../controller/userController')
 const projectController = require('../controller/projectController')


//import middleware
const jwtMiddleware = require('../middleware/jwtMiddleware')
//import multer
const multerConfig = require('../middleware/multerMiddleware')

// 2) create an object for the class

const router = new express.Router()

// 3) Path for resloving a request
//     syntax - router.httprequest('path to resolve request',() => {how to resolve the request(inside controller)})
//     a) Register
    router.post('/user/register', userController.register)
//     b)login
    router.post('/user/login',userController.login)
//     c)add projects
    router.post('/project/add',jwtMiddleware,multerConfig.single('image'),projectController.addProject)
//     d)get home projects
    router.get('/project/home-project',projectController.getHomeProject)
//     d)get all projects
    router.get('/project/all-project',jwtMiddleware,projectController.getAllProject)
//     d)get all user projects
    router.get('/project/user-project',jwtMiddleware,projectController.getUserProject)
//     e)edit project
    router.put('/project/edit/:id',jwtMiddleware,multerConfig.single('image'),projectController.editUserProject)
//     f)delete project
    router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteUserProject)
//     g) edit user
router.put('/user/edit',jwtMiddleware,multerConfig.single('profile'), userController.editUser)
    // 4) export router

module.exports = router