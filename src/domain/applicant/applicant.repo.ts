import { CreateApplicantDto } from "./applicant.dto";
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

  public async defineNumber(phone: string): Promise<string> {
    try {
      // Check if a row with the provided phone number exists in the database
      const existingApplicant = await Applicant.findOne({
        where: {
          phone: phone,
        },
        raw: true, // Return plain JSON object instead of model instance
      });

      if (existingApplicant ) {
        // If a matching row is found, return its id
        return "oldApplicant";
      } else {
        // If no matching row is found, return "newApplicant"
        return "newApplicant";
      }
    } catch (error) {
      // Handle any potential errors here
      throw new Error("Error while querying the database: " + error.message);
    }
  }

}

export default ApplicantRepo;
