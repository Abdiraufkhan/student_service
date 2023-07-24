import path from "path";
import transcript_pdf from "./transcript.model";

class TranscriptUploadRepo {

    public model = transcript_pdf
    public upload = async (file) => {


        const fileName = file.md5;
        const extension = file.mimetype.split("/")[1];
        
        const filePath = path.join(
            path.resolve(),
            "src",
            "public",
            "transcript_pdf",
            `${fileName}.${extension}`
        );
        await file.mv(filePath);

        const fullNameFile = `${fileName}.${extension}`
        
        

        return this.model.create({
            fullnamefile: `/src/public/transcript_pdf/${fullNameFile}`
        }); 
    };
}

export default TranscriptUploadRepo;