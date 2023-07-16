import { IsString, IsNotEmpty, Min } from "class-validator";
import { Column, Default, IsUUID, PrimaryKey } from "sequelize-typescript";

export class CreateSmsDto {
  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  smscode: string;
}
