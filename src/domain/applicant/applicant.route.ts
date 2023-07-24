import { Router } from "express";
import ApplicantController from "./applicant.controller";
import { checkMiddleware } from "middlewares/check.middleware";

class ApplicantRoute {
  public path = "/applicants";
  public router = Router();
  public controller = new ApplicantController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/",checkMiddleware, this.controller.getAll);
    this.router.get("/:id", this.controller.getById);
    this.router.post("/", this.controller.create);
  }
}

export default ApplicantRoute;
