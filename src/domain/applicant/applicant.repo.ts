import User from "domain/user/user.model";
import { CreateApplicantDto } from "./applicant.dto";
import Post from "./applicant.model";
import Applicant from "./applicant.model";

class ApplicantRepo {
  public getAll(): Promise<Applicant[]> {
    return Applicant.findAll();
  }

  public getById(id: string): Promise<Applicant> {
    return Applicant.findOne({
      where: {
        id,
      },
      raw: true,
    });
  }

  public create(data: CreateApplicantDto): Promise<Applicant> {
    return Applicant.create({
      ...data,
    });
  }
}

export default ApplicantRepo;
