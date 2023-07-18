import AccessApplicantRepo from "./access.repo";
import access_applicant from "./access.model";
import { CreateAccessDto } from "./access.dto";
import bcrypt from "bcrypt";
import { sign, verify } from "jsonwebtoken";

class AccessService {
  public repo = new AccessApplicantRepo();

  public async create(data: CreateAccessDto): Promise<access_applicant> {
    
    return this.repo.create({
      ...data,
    });
  }

  public async verifysmscode(message_id: string, smscode: string): Promise<Boolean>{
    return this.repo.verifySmsCode(message_id, smscode)
  }

  public async recipientByMessage_id(message_id:string):Promise<string>{
    return this.repo.getRecipientByMessageId(message_id)
  }


}

export default AccessService;
