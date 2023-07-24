import { ErrorMessage } from "enums/error-message.enum";
import { StatusCode } from "enums/status-code.enum";
import { BadRequestError } from "errors/bad-request.error";
import PhotoUploadServise from "./profile_photo.service";

class PhotoUploadController {
    public service = new PhotoUploadServise();

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

export default PhotoUploadController;
