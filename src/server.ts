import App from "app";
import ApplicantRoute from "domain/applicant/applicant.route";
import SmsRoute from "domain/sms/sms.route";
import UserRoute from "domain/user/user.route";

const app = new App([new UserRoute(), new ApplicantRoute(), new SmsRoute()]);

app.run();
