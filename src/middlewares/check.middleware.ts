import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IPayload } from "interfaces/payload.interface";
import { UnauthorizedError } from "errors/unauthorized.error";
import { ErrorMessage } from "enums/error-message.enum";
import { IRequest } from "interfaces/request.interface";
import { StatusCode } from "enums/status-code.enum";
import User from "domain/user/user.model";
import { CreateTokenDto } from "domain/security/security.dto";
import security from "domain/security/security.model";

const verifyToken = (token: string) => {
    try {
        return verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        throw new UnauthorizedError(ErrorMessage.Unauthorized);
    }
};

export const checkMiddleware = async (
    req: Request & {user:any},
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers["authorization"]; // string

        const payload: IPayload = verifyToken(token) as IPayload; // payload { id, email, name } id = 1

        const user = await  security.findOne({
            where: {
                recipient: payload.recipient,
            },
        }); // user

        if (!user) throw new UnauthorizedError(ErrorMessage.Unauthorized);

        req.user = user;

        next();
    } catch (error) {
        res.status(StatusCode.BadRequest).json({
            message: error.message,
        });
    }
};
