



import connectMongoDB from "@/utils/database"
import resultModels from "@/models/result"

export const POST = async (req) => {
    const {res, category, first, second, third, anotherFirst, anotherSecond, anotherThird, anotherGrades} = await req.json()
    try {
        await connectMongoDB()
        const newResult = new resultModels({
            res, category, 
            first,
            second,
            third,
            anotherFirst,
            anotherSecond,
            anotherThird,
            anotherGrades
        })

        await newResult.save()
        return new Response(JSON.stringify(newResult), "successfully completed", {status: 201})
    } catch (error) {
        return new Response("failed to post datas", {status: 500})
    }
}