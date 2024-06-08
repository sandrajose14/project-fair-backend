 //import model

const projects = require('../Models/projectSchema') 


exports.addProject =async (req,res)=>{
     // logic
     console.log('inside projectController request');

     const userId = req.payload
     console.log(userId);


 const image = req.file.filename
const{title,language,github,website,overview}= req.body
console.log(`${title}, ${language},${github},${website},${overview},${image}`);

try{
const existingProject = await projects.findOne({github})
if(existingProject){
     res.status(406).json('Project already exist... upload new Project')
}
else{
const newProject =new projects({
     title,
     language,
     github,
     website,
     overview,
     image,
     userId

})
await newProject.save()

// response
res.status(200).json(newProject)

}


}
catch(err){
     res.status(401).json('Request FAILED due to',err)
}
}


//getHomeProject
exports.getHomeProject =  async (req,res)=>{
     try{
const homeProject = await projects.find().limit(3)
res.status(200).json(homeProject)
     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }
}


//getAllProject

exports.getAllProject =  async (req,res)=>{

     const searchKey = req.query.search
     console.log(searchKey)

     const query = {
          language:{
               $regex:searchKey, $options:'i'
          }
     }
     try{
const allProject = await projects.find(query)
res.status(200).json(allProject)
     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }
}

//getUserProject

exports.getUserProject = async(req,res)=>{


     userId = req.payload
     try{
          const allUserProject = await projects.find({userId})
          res.status(200).json(allUserProject)
     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }
}



//editproject

exports.editUserProject = async(req,res)=>{
     const {id} = req.params
     const userId = req.payload

     const{title,language,github,website,image}= req.body


     const uploadProjectImage = req.file?req.file.filename:image


     try{

          const updateProject = await projects.findByIdAndUpdate({_id:id},{title,language,github,website,image:uploadProjectImage,userId},{new:true})


          await updateProject.save()

          res.status(200).json(updateProject)

     }
     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }

}

//delete user project
exports.deleteUserProject = async(req,res)=>{

     const {id} = req.params

     try{
          const removeProject = await projects.findByIdAndDelete({_id:id})

          res.status(200).json(removeProject)
     }

     catch(err){
          res.status(401).json('Request FAILED due to',err)
     }


}