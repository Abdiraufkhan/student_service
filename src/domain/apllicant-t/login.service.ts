import { hash, compare, genSalt } from "bcrypt";
import { loginApplicantDto } from "./login.dto";
import login from "./login.model";
import { Isms } from "interfaces/loginsms.interface";
import { sign, verify } from "jsonwebtoken";
import { UnauthorizedError } from "errors/unauthorized.error";
import { ErrorMessage } from "enums/error-message.enum";

class loginService {
    public model = login

    public register = async (data:loginApplicantDto):Promise<string>=>{
        const{recipient, smscode} = data;

        const hash = await this.generateHash(smscode, recipient)
        const result = await this.model.create({
            ...data,
            smscode:hash
        })
    
        const payload: Isms = {
            recipient: result.recipient,
            smscode: result.smscode
    
    
            
        }
        return this.generateToken(payload)
    }


    private generateHash = async (recipient: string, smscode: string):Promise<string> => {
        const salt = await genSalt(10);
        return hash(salt, smscode )
    }

    private compareHash = async (
        smscode: string,
        hash: string
    ):Promise<Boolean> => {
        return compare(smscode, hash);
    };

    public generateToken = async (payload: Isms): Promise<string> =>{
        return sign(payload, process.env.ACCESS_TOKEN_SECRET)
    }

    public verifyToken = async(token:string): Promise<Isms> =>{
        try{
            return verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch(error){
            throw new UnauthorizedError(ErrorMessage.Unauthorized)
        }
    }
}

export default loginService