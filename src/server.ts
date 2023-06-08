import App from "app";
import ApplicantRoute from "domain/applicant/applicant.route";
import UserRoute from "domain/user/user.route";

const app = new App([new UserRoute(), new ApplicantRoute()]);

app.run();
