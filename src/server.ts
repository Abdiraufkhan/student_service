import App from "app";
import ApplicantRoute from "domain/applicant/applicant.route";
import AccessRoute from "domain/access/access.route";
import SmsRoute from "domain/sms/sms.route";
import UserRoute from "domain/user/user.route";
import SecurityRoute from "domain/security/security.route";

const app = new App([new UserRoute(), new ApplicantRoute(), new SmsRoute(), new AccessRoute(), new SecurityRoute()]);

app.run();
