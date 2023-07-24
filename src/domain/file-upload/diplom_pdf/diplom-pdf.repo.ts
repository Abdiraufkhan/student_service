import path from "path";
import diplom from "./diplom_pdf.model";

class DiplomUploadRepo {

    public model = diplom
    public upload = async (file) => {

        const fileName = file.md5;
        const extension = file.mimetype.split("/")[1];
        
        const filePath = path.join(
            path.resolve(),
            "src",
            "public",
            "diplom",
            `${fileName}.${extension}`
        );
        await file.mv(filePath);

        const fullNameFile = `${fileName}.${extension}`
        

        return this.model.create({
            fullnamefile: `/src/public/diplom/${fullNameFile}`
        }); 
    };
}

export default DiplomUploadRepo;