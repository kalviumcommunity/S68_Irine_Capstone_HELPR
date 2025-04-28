const {connect} = require("mongoose")
const connectDB = async(url)=>{
    try {
        await connect(url)
        console.log("Connected to database")
    } catch (error) {
        console.error(error)
    }
};

module.exports=connectDB;