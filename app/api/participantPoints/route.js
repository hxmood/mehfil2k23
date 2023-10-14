import resultModels from "@/models/result"
import connectMongoDB from "@/utils/database"
import { names } from "@/names/page"

export const GET = async (req) => {

    const allNames = [].concat(...Object.values(names));
    const result = allNames.reduce((acc, name) => {
        acc[name] = 0;
        return acc;
      }, {});
    

    try {
        await connectMongoDB()
        const results = await resultModels.find()
        const students = {}

        results.forEach(item => {
            if(!item.first.name.toLowerCase().includes('& team') && !item.first.name.toLowerCase().includes('and team')) {

                if (!students[item.first.name]) {
                    students[item.first.name] = {points: 0, team: item.first.team}
                }
                students[item.first.name].points += item.first.marks
            }

            if(!item.anotherFirst.afName.toLowerCase().includes('& team') && !item.anotherFirst.afName.toLowerCase().includes('and team')) {

                if (!students[item.anotherFirst.afName]) {
                    students[item.anotherFirst.afName] = {points: 0, team: item.anotherFirst.afTeam}
                }
                students[item.anotherFirst.afName].points += item.anotherFirst.afMarks
            }

            if(!item.second.secName.toLowerCase().includes('& team') && !item.second.secName.toLowerCase().includes('and team')) {
                if (!students[item.second.secName]) {
                    students[item.second.secName] = {points: 0, team: item.second.secTeam}
                }
                students[item.second.secName].points += item.second.secMarks
            }

            if(!item.anotherSecond.asName.toLowerCase().includes('& team') && !item.anotherSecond.asName.toLowerCase().includes('and team')) {

                if (!students[item.anotherSecond.asName]) {
                    students[item.anotherSecond.asName] = {points: 0, team: item.anotherSecond.asTeam}
                }
                students[item.anotherSecond.asName].points += item.anotherSecond.asMarks
            }

            if(!item.third.thrName.toLowerCase().includes('& team') && !item.third.thrName.toLowerCase().includes('and team')) {
                if (!students[item.third.thrName]) {
                    students[item.third.thrName] = {points: 0, team: item.third.thrTeam}
                }
                students[item.third.thrName].points += item.third.thrMarks
            }

            if(!item.anotherThird.atName.toLowerCase().includes('& team') && !item.anotherThird.atName.toLowerCase().includes('and team')) {

                if (!students[item.anotherThird.atName]) {
                    students[item.anotherThird.atName] = {points: 0, team: item.anotherThird.atTeam}
                }
                students[item.anotherThird.atName].points += item.anotherThird.atMarks
            }

            item.anotherGrades.forEach(another => {
            
                if(!another.addName.toLowerCase().includes('& team') && !another.addName.toLowerCase().includes('and team')) {

                    if (!students[another.addName]) {
                        students[another.addName] = {points: 0, team: another.addTeam}
                    }
                    students[another.addName].points += another.addMarks
                }
            })
            
        })

        const studentData = Object.keys(students).map(name => ({ name, points: students[name].points, team: students[name].team}));
        
        return new Response(JSON.stringify(studentData), {status:201})
    } catch (error) {
        return new Response("failed to fetch the results", {status: 500})
    }
}