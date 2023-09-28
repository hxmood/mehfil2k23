import resultModels from "@/models/result";
import connectMongoDB from "@/utils/database";

export const GET = async (req) => {
  try {

    await connectMongoDB();
    const results = await resultModels.find({});
    return new Response(JSON.stringify(results), { status: 201 });

  } catch (error) {
    return new Response("failed to fetch results")
  }
}
