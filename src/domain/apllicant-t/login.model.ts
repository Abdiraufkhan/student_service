import { table } from "console";
import { Model } from "sequelize";
import { Column, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    schema: "login",
})

class login extends Model {
    
    @PrimaryKey
    @Column
    recipient: string;


    @Column
    smscode: string;
}

export default login;