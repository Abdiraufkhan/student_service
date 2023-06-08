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
  schema: "qabul",
  tableName: "applicant",
  createdAt: false,
  updatedAt: false,
})
class applicant extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  email: string;

  @Column
  father_name: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  mobile_phone: string;

  @Column
  phone: string;

  @Column
  status: string;

  @Column
  zone: string;

  @Column
  profile_photo_id: string;

  @Column
  generation: string;

  @Column
  status_applicant: string;

  @Column
  student_id_number: string;

  @CreatedAt
  @Column({
    type: DataType.Date,
    defaultValue: DataType.NOW,
  })
  created_at: Date;

  @UpdatedAt
  @Column({
    type: DataType.Date,
    defaultValue: DataType.NOW,
  })
  updated_at: Date;
}

export default applicant;
