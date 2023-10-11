// pages/api/updatePoints.js
import connectMongoDB from "@/utils/database";
import pointsModel from "@/models/totalPoints";

export const PUT = async (req) => {
  try {
    await connectMongoDB();
    const { team, points } = await req.json();

    const result = await pointsModel.findOneAndUpdate(
      { team: team },
      { $set: { points: points } }
    );

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response("failed to update", { status: 500 });
  }
};
