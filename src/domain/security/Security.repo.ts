import { CreateTokenDto } from "./security.dto";
import security from "./security.model";

class SecurityRepo {
    
    public async genereatetoken(data: CreateTokenDto) {
        return security.create(
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

export default SecurityRepo;
