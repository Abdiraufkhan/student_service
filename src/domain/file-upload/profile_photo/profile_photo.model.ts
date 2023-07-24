import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  Default,
} from "sequelize-typescript";
@Table({
  timestamps: true,
  schema: "profile_photo"
})
class profile_photo extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  fullnamefile: string;

}

export default profile_photo;
