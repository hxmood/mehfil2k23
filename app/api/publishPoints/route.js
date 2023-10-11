import pointsModel from "@/models/totalPoints";
import connectMongoDB from "@/utils/database";

export const POST = async (req) => {
  const { team, points } = await req.json();
  try {
    await connectMongoDB();
    const publishedPoints = new pointsModel({
      team: team,
      points: points
    });

    await publishedPoints.save();
    return new Response(JSON.stringify(publishedPoints), { status: 201 });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500 });
  }
};
