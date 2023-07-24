import { ErrorMessage } from "enums/error-message.enum";
import { StatusCode } from "enums/status-code.enum";
import { BadRequestError } from "errors/bad-request.error";
import PhotoUploadServise from "./pasport_pdf.service";
import PasportUploadService from "./pasport_pdf.service";

class PasportUploadController {
    public service = new PasportUploadService();

    public upload = async (req, res, next) => {
        try {
            const file = req.files?.file;
            
            if (!file) throw new BadRequestError(ErrorMessage.FileRequired);

            const result = await this.service.upload(file);

            res.status(StatusCode.Ok).json({
                link: result,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    };
}

export default PasportUploadController;
