import { Router } from "express";
import DiplomUploadController from "./diplom_pdf.controller";

class DiplomUploadRoute {
    public readonly controller = new DiplomUploadController();
    public readonly path = "/files";
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/diplom", this.controller.upload);
    }
}

export default DiplomUploadRoute;
