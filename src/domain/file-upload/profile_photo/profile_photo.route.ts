import { Router } from "express";
import PhotoUploadController from "./profile_photo.controller";

class PhotoUploadRoute {
    public readonly controller = new PhotoUploadController();
    public readonly path = "/files";
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/photo", this.controller.upload);
    }
}

export default PhotoUploadRoute;
