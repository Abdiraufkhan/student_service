import { ErrorMessage } from "enums/error-message.enum";
import { ConflictError } from "errors/conflict.error";
import slugify from "slugify";
import { CreateApplicantDto } from "./post.dto";
import Post from "./post.model";
import PostRepo from "./post.repo";
import ApplicantRepo from "./post.repo";
import applicant from "./post.model";

class ApplicantService {
  public repo = new ApplicantRepo();

  public async getAll(): Promise<applicant[]> {
    return this.repo.getAll();
  }

  public async getById(id: string): Promise<applicant> {
    return this.repo.getById(id);
  }

  public async create(data: CreateApplicantDto): Promise<applicant> {
    // const { email } = data;
    // const slug = slugify(title);

    // const post = await this.repo.getBySlug(slug);
    // if (post)
    //     throw new ConflictError(
    //         ErrorMessage.PostWithThisTitleAlreadyExists
    //     );

    return this.repo.create({
      ...data,
    });
  }
}

export default ApplicantService;
