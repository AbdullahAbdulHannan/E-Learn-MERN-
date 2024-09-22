const mongoose=require('mongoose')
 const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://abdullahhannan450:e-platform@cluster0.x5fgi.mongodb.net/")
        console.log("connected");
        
    } catch (error) {
        console.error(error);
        
    }
}
module.exports=connectDB;