import { Sequelize } from "sequelize-typescript";
import { CreateApplicantDto } from "./user.dto";
import { IUser } from "./user.interface";
import User from "./user.model";

class UserRepo {
  public async getAll() {
    return User.findAll();
  }

  public async getByEmail(email: string): Promise<IUser> {
    return User.findOne({
      where: {
        email,
      },
      raw: true,
    });
  }

  public async create(data: CreateApplicantDto) {
    return User.create(
      {
        ...data,
      },
      {
        returning: true,
        raw: true,
      }
    );
  }
}

export default UserRepo;
