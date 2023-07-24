import { ErrorMessage } from "enums/error-message.enum";
import { ConflictError } from "errors/conflict.error";
import { CreateApplicantDto } from "./applicant.dto";
import ApplicantRepo from "./applicant.repo";
import Applicant from "./applicant.model";
import { IApplicant } from "./applicant.interface";

class ApplicantService {
  public repo = new ApplicantRepo();

  public async getAll(): Promise<Applicant[]> {
    return this.repo.getAll();
  }

  public async getById(id: string): Promise<Applicant> {
    return this.repo.getById(id);
  }

  public async create(data: CreateApplicantDto): Promise<Applicant> {
    return this.repo.create(data);
  }

  public async define(phone: string): Promise<string> {
    return this. repo.defineNumber(phone)
  }

}

export default ApplicantService;
