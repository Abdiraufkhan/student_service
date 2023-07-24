import { IsString, IsNotEmpty, IsUUID } from "class-validator";

export class CreateApplicantDto {
  
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
  birth_data: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  citizenship: string;

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsString()
  @IsNotEmpty()
  inregion: string;

  @IsString()
  @IsNotEmpty()
  indistrict: string;

  @IsString()
  @IsNotEmpty()
  inlive: string;

  @IsString()
  @IsNotEmpty()
  pasport_id: string;

  @IsString()
  @IsNotEmpty()
  pasport_from: string;

  @IsString()
  @IsNotEmpty()
  mobile_phone: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;


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
  pasport_pdf_id: string;

  @IsString()
  @IsNotEmpty()
  transcript_pdf_id: string;

  @IsString()
  @IsNotEmpty()
  middle_college_pdf_id: string;


  @IsString()
  @IsNotEmpty()
  generation: string;

  @IsString()
  @IsNotEmpty()
  from_university: string;

  @IsString()
  @IsNotEmpty()
  which_branch: string;

  @IsString()
  @IsNotEmpty()
  middle_college: string;

  @IsString()
  @IsNotEmpty()
  our_branch: string;

  @IsString()
  @IsNotEmpty()
  education_type: string;


}
