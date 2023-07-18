import { Router } from "express";
import AccessController from "./access.controller";

class AccessRoute {
  public path = "/accessuser";
  public router = Router();
  public controller = new AccessController;

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post("/create", this.controller.create);
    this.router.post("/verify", this.controller.verify);
  }
}

export default AccessRoute;
