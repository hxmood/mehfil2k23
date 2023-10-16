import mongoose from "mongoose"

let isConnected = false

const connectMongoDB = async () => {

    mongoose.set("strictQuery",true)
    if(isConnected) {
        console.log("mongodb is aldready connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "suffa_mehfil",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("mongodb is connected");
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB