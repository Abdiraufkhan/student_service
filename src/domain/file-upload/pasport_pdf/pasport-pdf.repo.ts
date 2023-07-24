import path from "path";
import pasport_pdf from "./pasport_pdf.model";

class PasportUploadRepo {

    public model = pasport_pdf
    public upload = async (file) => {

        const fileName = file.md5;
        const extension = file.mimetype.split("/")[1];
        
        const filePath = path.join(
            path.resolve(),
            "src",
            "public",
            "pasport_pdf",
            `${fileName}.${extension}`
        );
        await file.mv(filePath);

        const fullNameFile = `${fileName}.${extension}`
        

        return this.model.create({
            fullnamefile: `/src/public/pasport_pdf/${fullNameFile}`
        }); 
    };
}

export default PasportUploadRepo;