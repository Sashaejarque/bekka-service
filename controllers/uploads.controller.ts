import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { UploadedFile } from "express-fileupload";

cloudinary.v2.config(process.env.CLOUDINARY_URL || "");

export const updateImageCloudinary = () => {};

export const postImage = async (req: Request, res: Response) => {
  if (!req.files)
    return res.status(400).json({ msg: "No files were uploaded" });
  try {
    // https://github.com/richardgirges/express-fileupload/issues/156 UploadedFile
    const { tempFilePath } = req.files.image as UploadedFile;
    const image = await cloudinary.v2.uploader.upload(tempFilePath);
    const { secure_url } = image;

    res.json({
      secure_url,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Something went wrong" });
  }
};
