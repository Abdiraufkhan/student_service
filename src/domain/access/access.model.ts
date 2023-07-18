import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  Is,
  Default,
} from "sequelize-typescript";

@Table({
  schema: "access_applicant",
  timestamps: true,
})
class access_applicant extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  message_id: string;

  @Column
  recipient: string;

  @Column
  smscode: string;
}

export default access_applicant;
