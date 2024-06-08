

//1)import multer
const multer =require("multer")

//3)storage creation
const storage=multer.diskStorage({
  
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    //filename-the nama in which the file is stored in the destination
    filename:(req,file,callback)=>{
        //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
        const filename= `image.${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})
const fileFilter =(req,file,callback)=>{
    //which type of file type to be uploaded
    if(file.mimetype==='image/png'||file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error ("only png,jpeg,jpg files will be allowed"))
    }
}



 //2)create multerconfiguration
 const multerconfig =multer({
    storage,
    fileFilter
 })


 //3)export multer
 module.exports = multerconfig
