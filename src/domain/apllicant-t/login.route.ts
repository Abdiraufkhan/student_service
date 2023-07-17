import { Router } from "express";
import loginController from "./login.controller";

class LoginRoute{
    public readonly controller = new loginController();
    public readonly path = "/login";
    public readonly router = Router();


    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/login", this.controller.register);
    }
}

export default LoginRoute