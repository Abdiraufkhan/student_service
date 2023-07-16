import { Router } from "express";
import SmsController from "./sms.controller";

class SmsRoute {
  public path = "/sms";
  public router = Router();
  public controller = new SmsController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/:id", this.controller.getByID);
    this.router.post("/create", this.controller.create);
  }
}
export default SmsRoute;
