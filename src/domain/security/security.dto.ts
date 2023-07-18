import { IsString, IsNotEmpty, Min, IsNumber } from "class-validator";

export class CreateTokenDto {

  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  smscode: string;

  
}
