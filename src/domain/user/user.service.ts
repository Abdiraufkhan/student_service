import UserRepo from "./user.repo";
import { Sequelize } from "sequelize-typescript";
import { CreateApplicantDto } from "./user.dto";
import { ConflictError } from "errors/conflict.error";
import { ErrorMessage } from "enums/error-message.enum";
import bcrypt from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { IPayload } from "interfaces/payload.interface";

class UserService {
  public repo = new UserRepo();

  public async getAll() {
    return this.repo.getAll();
  }
}

export default UserService;
