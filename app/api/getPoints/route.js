// pages/api/getTotalPoints.js
import connectMongoDB from "@/utils/database";
import pointsModel from "@/models/totalPoints";
export const GET =  async (req) => {
  try {
    await connectMongoDB();

    const results = await pointsModel.find();
    
    const totalPoints = results.reduce((acc, result) => {
      acc[result.team] = (acc[result.team] || 0) + result.points;
      return acc;
    }, {});

    return new Response(JSON.stringify(totalPoints), {status: 201});
  } catch (error) {
    return new Response("not working")
  }
}
