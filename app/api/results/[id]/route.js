// GET

import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";

export const GET = async (req, {params}) => {
  try {

    await connectMongoDB();
    const results = await resultModels.findById(params.id);
    if (!results) {
        return new Response("prompt not found", {status: 404})
    }
    return new Response(JSON.stringify(results), { status: 201 });

  } catch (error) {
    return new Response("failed to fetch results")
  }
}

// PATCH
export const PATCH = async (req, {params}) => {
    const {item, category, name, team, grade, marks, secName, secTeam, secGrade, secMarks, thrName, thrTeam, thrGrade, thrMarks} = await req.json()

    try {
        await connectMongoDB()
        const result = await resultModels.findById(params.id)
        if (!result) {
            return new Response("prompt not found", {status: 404})
        }

        result.res = item;
        result.category = category;
        result.first.name = name;
        result.first.team = team;
        result.first.grade = grade;
        result.first.marks = marks;
        result.second.secName = secName;
        result.second.secTeam = secTeam;
        result.second.secGrade = secGrade;
        result.second.secMarks = secMarks;
        result.third.thrName = thrName;
        result.third.thrTeam = thrTeam;
        result.thrid.thrGrade = thrGrade;
        result.thid.thrMarks = thrMarks

        await result.save()

        return new Response(JSON.stringify(result), {status: 201})

    } catch (error) {
        return new Response("failed to fetch" ,{status: 500})
    }
}


//DELETE 

export const DELETE = async(req, {params}) => {
    try {
        await connectMongoDB()

        await resultModels.findByIdAndRemove(params.id)

        return new Response("successfully deleted", {status: 201})
    } catch (error) {
        return new Response("failed to delete", {status: 500})
    }
}