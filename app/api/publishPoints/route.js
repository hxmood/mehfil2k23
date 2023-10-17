import pointsModel from "@/models/totalPoints";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { team, points } = await req.json();
  try {
    await connectMongoDB();
    const publishedPoints = new pointsModel({
      team: team,
      points: points
    });

    await publishedPoints.save();
    return NextResponse.json(publishedPoints)
  } catch (error) {
    return NextResponse.json({message: "Error: " + error.message}, { status: 500 });
  }
};
