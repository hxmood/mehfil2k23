import mongoose from "mongoose"

let isConnected = false

const connectMongoDB = async () => {

    mongoose.set("strictQuery",true)
    if(isConnected) {
        console.log("mongodb is aldready connected");
        return
    }

    try {
        await mongoose.connect("mongodb+srv://mhdibnhameed:mehfil_2k23@cluster0.4tx0htv.mongodb.net/?retryWrites=true&w=majority",{
            dbName: "suffa_mehfil",
        })
        isConnected = true
        console.log("mongodb is connected");
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB