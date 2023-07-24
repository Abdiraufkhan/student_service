import path from "path";
import profile_photo from "./profile_photo.model";

class PhotoUploadRepo {

    public model = profile_photo
    public upload = async (file) => {
  console.log(file,'file')

        const fileName = file.md5;
        const extension = file.mimetype.split("/")[1];
        
        const filePath = path.join(
            path.resolve(),
            "src",
            "public",
            "profile_photo",
            `${fileName}.${extension}`
        );
        await file.mv(filePath);

        const fullNameFile = `${fileName}.${extension}`
        

        console.log(fullNameFile);
        

        return this.model.create({
            fullnamefile: `/src/public/profile_photo/${fullNameFile}`
        }); 
    };
}

export default PhotoUploadRepo;