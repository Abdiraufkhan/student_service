import App from "app";
import LoginRoute from "domain/apllicant-t/login.route";
import ApplicantRoute from "domain/applicant/applicant.route";
import SmsRoute from "domain/sms/sms.route";
import UserRoute from "domain/user/user.route";

const app = new App([new UserRoute(), new ApplicantRoute(), new SmsRoute(), new LoginRoute()]);

app.run();
