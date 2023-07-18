import { StatusCode } from "enums/status-code.enum";
import { NextFunction, Request, Response } from "express";
import { IRequest } from "interfaces/request.interface";
import { validation } from "utils/validation.util";
import SecurityService from "./security.service";
import { CreateTokenDto } from "./security.dto";

class SecurityController {
    public service = new SecurityService();

    
    public register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const registerData: CreateTokenDto = req.body;
             await validation(CreateTokenDto, registerData);

            const result = await this.service.register(registerData)

            res.status(StatusCode.Created).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default SecurityController;
