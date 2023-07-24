import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  Default,
  CreatedAt,
  DataType,
  UpdatedAt,
} from "sequelize-typescript";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
@Table({
  timestamps: true,
  schema: "applicant",
  tableName:"applicants"
  
})
class applicant extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  

  @Column
  father_name: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  birth_data: string;

  @Column
  gender: string;

  @Column
  citizenship: string;

  @Column
  nationality: string;

  @Column
  inregion: string;

  @Column
  indistrict: string;

  @Column
  inlive: string;

  @Column
  pasport_id: string;

  @Column
  pasport_from: string;

  @Column
  mobile_phone: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  status: string;

  @Column
  zone: string;

  @Column
  profile_photo_id: string;

  @Column
  pasport_pdf_id: string;

  @Column
  transcript_pdf_id: string;

  @Column
  middle_college_pdf_id: string;

  @Column
  generation: string;


}

export default applicant;
