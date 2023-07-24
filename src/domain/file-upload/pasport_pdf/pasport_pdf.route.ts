import { Router } from "express";
import PasportUploadController from "./pasport_pdf.controller";

class PasportUploadRoute {
    public readonly controller = new PasportUploadController();
    public readonly path = "/files";
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/pasport", this.controller.upload);
    }
}

export default PasportUploadRoute;
