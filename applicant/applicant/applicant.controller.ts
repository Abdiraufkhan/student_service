import { StatusCode } from "enums/status-code.enum";
import { NextFunction, Response } from "express";
import { IRequest } from "interfaces/request.interface";
import { validation } from "utils/validation.util";
import ApplicantService from "./post.service";
import { CreateApplicantDto } from "./applicant.dto";

class ApplicantController {
    public service = new ApplicantService();

    public getAll = async (
        req: IRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const result = await this.service.getAll();

            res.status(StatusCode.Ok).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };

    public getById = async (
        req: IRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id: string = req.params.id;
            const result = await this.service.getById(id);

            res.status(StatusCode.Ok).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };

    public create = async (
        req: IRequest,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const createData: CreateApplicantDto = req.body;
            await validation(CreateApplicantDto, createData);

            const result = await this.service.create(createData);

            res.status(StatusCode.Created).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default ApplicantController;
