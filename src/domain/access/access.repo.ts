import { CreateAccessDto } from "./access.dto";
import access_applicant from "./access.model";

class AccessApplicantRepo {

  public create(data: CreateAccessDto): Promise<access_applicant> {
    return access_applicant.create({
      ...data,
    });
  }

  public async verifySmsCode(message_id: string, smscode: string): Promise<boolean> {
    const accessApplicant = await access_applicant.findOne({
      where: {
        message_id: message_id,
        smscode: smscode,
      },
    });

    return !!accessApplicant; 
}

public async createtoken(data: CreateAccessDto ){
  return access_applicant.create(
    {
      ...data,
    },
    {
      returning: true,
      raw: true,
    }

  );
}
}

export default AccessApplicantRepo;
