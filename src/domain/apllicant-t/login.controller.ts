import { NextFunction, Request, Response } from "express";
import loginService from "./login.service";
import { loginApplicantDto } from "./login.dto";
import { StatusCode } from "enums/status-code.enum";

class loginController{
    public service =new loginService

    public register = async (
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const registerdata: loginApplicantDto = req.body;

            const result = await this.service.register(registerdata);
            req.headers.authorization;
            res.status(StatusCode.Created).json({
                message: "created",
                access_token: result,

            })
        }catch (error) {
            next(error);
        }
    }

} 
export default loginController