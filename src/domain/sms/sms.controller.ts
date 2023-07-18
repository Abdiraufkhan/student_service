import { StatusCode } from "enums/status-code.enum";
import SmsService from "./sms.service";
import { NextFunction, Response, Request } from "express";
import { CreateSmsDto } from "./sms.dto";
import msg_fetch from "./sms.requestservice";
import { log } from "console";

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

      

    const recipient = result.recipient
    const text = result.smscode
     const message_id = result.dataValues.message_id

    msg_fetch(recipient, message_id, text )

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default SmsController;
