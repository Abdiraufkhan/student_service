import { IsString, IsNotEmpty, IsUUID } from "class-validator";

export class CreateApplicantDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  father_name: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  mobile_phone: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  zone: string;

  @IsString()
  @IsNotEmpty()
  profile_photo_id: string;

  @IsString()
  @IsNotEmpty()
  generation: string;

  @IsString()
  @IsNotEmpty()
  status_applicant: string;

  @IsString()
  @IsNotEmpty()
  student_id_number: string;

  id: string;
}
