// pages/api/updatePoints.js
import connectMongoDB from "@/utils/database";
import pointsModel from "@/models/totalPoints";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoDB()
}

export const PUT = async (req) => {
  try {
    await connectMongoDB();
    const { team, points } = await req.json();

    const result = await pointsModel.findOneAndUpdate(
      { team: team },
      { $set: { points: points } }
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({message:"failed to update"}, { status: 500 });
  }
};
