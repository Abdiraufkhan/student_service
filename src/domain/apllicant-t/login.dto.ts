import { IsString, IsNotEmpty } from "class-validator";

export class loginApplicantDto {
    @IsString()
    @IsNotEmpty()
    smscode: string;

    @IsString()
     @IsNotEmpty()
    recipient: string;
}