import connectMongoDB from "@/utils/database";
import resultModels from "@/models/result";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { res, category, first, second, third, anotherGrades } = await req.json();
    await connectMongoDB();
    await resultModels.create({
        res, category, first, second, third, anotherGrades
    })
    return NextResponse.json({message: "results posted to database"}, {status: 200})

  } catch (error) {
    console.error("Error:", error);
    return NextResponse({message: "failed to post results to database"}, {status: 500})
  }
};
