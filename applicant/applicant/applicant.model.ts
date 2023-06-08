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
    // schema: "qabul",
})
class Applicant extends Model {
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
}

export default Applicant;
