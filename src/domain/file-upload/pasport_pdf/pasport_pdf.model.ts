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
  schema: "pasport_pdf"
})
class pasport_pdf extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  fullnamefile: string;

}

export default pasport_pdf;
