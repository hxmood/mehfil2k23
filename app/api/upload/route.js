import connectMongoDB from "@/utils/database";
import Photos from "@/models/photos";
import upload from "@/middleware/multermiddleware";

export default upload.single('image')(async (req) => {
    const  {filename, path, originalname} = await req.file
    console.log(req.file)

    // try {
    //     await connectMongoDB()
    //     const imageUpload = new Photos({
    //         filename,
    //         path,
    //         originalname
            
    //     })
    //     await imageUpload.save()
    //     res.status(201).json(imageUpload)
    //     // return new Response(JSON.stringify(imageUpload), {status: 201})
    // } catch (error) {
    //     return new Response("failed to upload images to server", {status: 500})
    // }

})
    

