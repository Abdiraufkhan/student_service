import { StatusCode } from "enums/status-code.enum";
import SmsService from "./sms.service";
import { NextFunction, Response, Request } from "express";
import { CreateSmsDto } from "./sms.dto";

class SmsController {
  public service = new SmsService();

  public getByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message_id: string = req.params.id;

      const result = await this.service.getById(message_id);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: CreateSmsDto = req.body;

      // await validation(CreateSmsDto, createData)

      const result = await this.service.create({
        ...createData,
      });

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default SmsController;
