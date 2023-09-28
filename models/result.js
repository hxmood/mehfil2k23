import mongoose, { Schema, model, models } from "mongoose";

const resultTypes = new Schema({
        res: String,
        category: String,
    first: {
        name: String,
        team: String,
        grade: String,
        marks: Number,
    },

    second: {
       secName: String,
       secTeam: String,
       secGrade: String,
       secMarks: Number
    },

    third: {
        thrName: String,
        thrTeam: String,
        thrGrade: String,
        thrMarks: Number
    },

    anotherFirst: {
        afName: String,
        afTeam: String,
        afGrade: String,
        afMarks: Number
    },

    anotherSecond: {
        asName: String,
        asTeam: String,
        asGrade: String,
        asMarks: Number
    },

    anotherThird: {
        atName: String,
        atTeam: String,
        atGrade: String,
        atMarks: Number
    }


},
)

const resultModels = models.Result || model("Result", resultTypes)

export default resultModels