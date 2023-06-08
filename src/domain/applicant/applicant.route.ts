import { Router } from "express";
import { checkMiddleware } from "middlewares/check.middleware";
import PostController from "./applicant.controller";
import ApplicantController from "./applicant.controller";

class ApplicantRoute {
  public path = "/applicants";
  public router = Router();
  public controller = new ApplicantController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/", this.controller.getAll);
    this.router.get("/:id", this.controller.getById);
    this.router.post("/", this.controller.create);
  }
}

export default ApplicantRoute;
