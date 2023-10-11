import mongoose, {Schema, model, models} from "mongoose";

const newimage = new Schema({
    filename: String,
    path: String,
    originalname: String
})

const Photos = models.Images || model("Images", newimage)

