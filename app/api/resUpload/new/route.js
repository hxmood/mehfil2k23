import resultModels from "@/models/result"
import connectMongoDB from "@/utils/database"

export const POST = async (req) => {
    const {res,category,name,team,grade,marks,
        secName,secTeam,secGrade,secMarks,
        thrName,thrTeam,thrGrade,thrMarks, 
        afName, afTeam, afGrade, afMarks,
        asName, asTeam, asGrade, asMarks,
        atName, atTeam, atGrade, atMarks} = await req.json()
    try {
        await connectMongoDB()
        const newResult = new resultModels({
            res, category, 
            first: { name, team, grade, marks},
            second: {secName,secTeam,secGrade,secMarks,},
            third: {thrName,thrTeam,thrGrade,thrMarks},
            anotherFirst: {afName, afTeam, afGrade, afTeam, afMarks},
            anotherSecond: {asName, asTeam, asGrade, asMarks},
            anotherThird: {atName, atTeam, atGrade, atMarks}
        })

        await newResult.save()
        return new Response(JSON.stringify(newResult), "successfully completed", {status: 201})
    } catch (error) {
        return new Response("failed to post datas", {status: 500})
    }
}