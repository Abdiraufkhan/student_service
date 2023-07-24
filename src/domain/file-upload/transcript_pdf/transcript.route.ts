import { Router } from "express";
import TranscriptUploadController from "./transcript.controller";

class TranscriptUploadRoute {
    public readonly controller = new TranscriptUploadController();
    public readonly path = "/files";
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/transcript", this.controller.upload);
    }
}

export default TranscriptUploadRoute;
