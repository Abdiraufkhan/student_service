import { CreateSmsDto } from "./sms.dto";
import sms from "./sms.model";
import SmsRepo from "./sms.repo";

class SmsService {
  public repo = new SmsRepo();

  public async getById(message_id: string): Promise<sms> {
    return this.repo.getById(message_id);
  }

  public async create(data: CreateSmsDto): Promise<sms> {
    return this.repo.create({
      ...data,
    });
  }
}

export default SmsService;
