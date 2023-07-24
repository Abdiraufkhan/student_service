import { StatusCode } from "enums/status-code.enum";
import { NextFunction, Request, Response } from "express";
import AccessService from "./access.service";
import msg_fetch from "domain/sms/sms.requestservice";
import SecurityService from "domain/security/security.service";
import ApplicantService from "domain/applicant/applicant.service";

class AccessController {
  public service = new AccessService();
  public service2 = new SecurityService();
  public service3 = new ApplicantService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipient: string = req.body.recipient;

      const smscode: string = this.generateRandomSmsCode();

      const result = await this.service.create({
        recipient,
        smscode,
      });

      msg_fetch(
        result.recipient,
        result.message_id,
        `Xalqaro Nordik Universitetining O'qishni ko'chiruvchilar uchun mo'ljallangan platformasiga kirish uchun kod ${result.smscode}`
      );
      res.status(StatusCode.Created).json({
        message: "Code for login has been sent",
        message_id: result.message_id,
      });
    } catch (error) {
      next(error);
    }
  };

  private generateRandomSmsCode(): string {
    const min = 10000;
    const max = 99999;
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  public verify = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message_id: string = req.body.message_id;
      const smscode: string = req.body.smscode;
      const result = await this.service.verifysmscode(message_id, smscode);
      const recipient = await this.service.recipientByMessage_id(message_id);

      const phone: string = recipient

      const define = await this.service3.define(phone);
      

      if (result && define === "newApplicant" ) {

        const data = await this.service2.register({ smscode, recipient });

        res.status(StatusCode.Ok).json({
          data: data,
          message: "New Applicant",
        });
      } else if(result && define === "oldApplicant"){
        const data = await this.service2.register({ smscode, recipient });

        res.status(StatusCode.Ok).json({
          data: data,
          message: "Old Applicant",
        });      
      }
       else {
        res.status(StatusCode.UnprocessableEntity).json({
          message: "Notog'ri kod",
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default AccessController;
