import User from "domain/user/user.model";
import applicant from "./post.model";
import { CreateApplicantDto } from "./post.dto";

class ApplicantRepo {
  public getAll(): Promise<applicant[]> {
    return applicant.findAll();
  }

  public getBySlug(slug: string): Promise<applicant> {
    return applicant.findOne({
      where: {
        slug,
      },
      include: [User],
      raw: true,
    });
  }

  public getById(id: string): Promise<applicant> {
    return applicant.findOne({
      where: {
        id,
      },
      include: [User],
      raw: true,
    });
  }

  public create(data: CreateApplicantDto): Promise<applicant> {
    return applicant.create({
      ...data,
    });
  }
}

export default ApplicantRepo;
