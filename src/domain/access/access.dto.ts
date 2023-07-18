import { IsString, IsNotEmpty, Min, IsNumber } from "class-validator";

export class CreateAccessDto {

  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  smscode: string;

  
}
