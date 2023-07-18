import { CreateTokenDto } from "./security.dto";
import bcrypt from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import SecurityRepo from "./Security.repo";

class SecurityService {
    public repo = new SecurityRepo();


    public async register(data: CreateTokenDto): Promise<string> {
        const { recipient, smscode } = data;

        // let user = await this.repo.getByEmail(email);
        // if (user) throw new ConflictError(ErrorMessage.EmailAlreadyTaken);

        const hash = await this.generateHash(smscode);

        const { dataValues: newUser } = await this.repo.genereatetoken({
            ...data,
            smscode: hash,
        });
        delete newUser.smscode;

        const payload: CreateTokenDto = {
            ...newUser,
        };

        return this.generateJWT(payload);
    }

    private async generateHash(smscode: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(smscode, salt);
    }

    private async compareHash(
        smscode: string,
        hash: string
    ): Promise<boolean> {
        return bcrypt.compare(smscode, hash);
    }

    private generateJWT(payload: CreateTokenDto): string {
        return sign(payload, process.env.ACCESS_TOKEN_SECRET);
    }

    private verifyJWT(token: string): boolean {
        try {
            verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch (error) {
            return false;
        }
    }
}

export default SecurityService;
