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
    schema:"security-token"
})
class security extends Model {
    @IsUUID(4)
    @Default(UUIDV4)
    @PrimaryKey
    @Column
    access_id: string;
    
    @Column
    smscode: string;

    @Column
    recipient: string;
}

export default security;
