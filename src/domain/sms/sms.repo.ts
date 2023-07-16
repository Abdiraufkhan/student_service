import { CreateSmsDto } from "./sms.dto";
import sms from "./sms.model";

class SmsRepo {
  public create(data: CreateSmsDto): Promise<sms> {
    return sms.create({
      ...data,
    });
  }

  public getById(message_id): Promise<sms> {
    return sms.findOne({
      where: {
        message_id,
      },
      raw: true,
    });
  }
}

export default SmsRepo;
