import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";

export const GET = async(req) => {
    try {
        await connectMongoDB()
        const results = await resultModels.find({})

        const totalPoints = {
            "Traditional Trackers": 0,
            "Legacy Legends" : 0,
            "Ancient Alliance" : 0
        }

            results.forEach((result) => {
                totalPoints[result.first.team] += result.first.marks,
                totalPoints[result.second.secTeam] += result.second.secMarks,
                totalPoints[result.third.thrTeam] += result.third.thrMarks
                if(result.anotherFirst.afMarks) {
                    totalPoints[result.anotherFirst.afTeam] += result.anotherFirst.afMarks
                }
    
                if(result.anotherSecond.asMarks) {
                    totalPoints[result.anotherSecond.asTeam] += result.anotherSecond.asMarks
                }
    
                if(result.anotherThird.atMarks) {
                    totalPoints[result.anotherThird.atTeam] += result.anotherThird.atMarks
                }
    
                if(result.anotherGrades) {
                    result.anotherGrades.forEach(item => {
                        totalPoints[item.addTeam] += item.addMarks
                    })
                }
            
            })

        console.log(totalPoints)
       

        return new Response(JSON.stringify(totalPoints), {status: 201})
    } catch (error) {
        return new Response(error)
    }
}