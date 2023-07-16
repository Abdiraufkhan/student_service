import Post from "domain/post/post.model";
import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  HasMany,
  Is,
  Default,
} from "sequelize-typescript";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

@Table({
  schema: "sms",
  timestamps: true,
})
class sms extends Model {
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

export default sms;
