import { Router } from "express";
import { checkMiddleware } from "middlewares/check.middleware";
import PostController from "./post.controller";

class ApplicantsRoute {
  public path = "/aplicant";
  public router = Router();
  public controller = new PostController();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/", this.controller.getAll);
    this.router.get("/:id", this.controller.getById);
    this.router.post("/create", this.controller.create);
    this.router.post("/", checkMiddleware, this.controller.create);
  }
}

export default ApplicantsRoute;
