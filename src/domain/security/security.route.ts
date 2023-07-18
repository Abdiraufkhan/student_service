import { Router } from "express";
import SecurityController from "./security.controller";

class SecurityRoute {
    public path = "/security";
    public router = Router();
    public controller = new SecurityController();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post("/", this.controller.register);
    }
}

export default SecurityRoute;
