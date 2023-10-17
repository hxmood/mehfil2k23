import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {

    await connectMongoDB();
    const results = await resultModels.find();
    return NextResponse.json(results)

  } catch (error) {
    return NextResponse.json({message: "failed to fetch results"}, {status: 500})
  }
}
