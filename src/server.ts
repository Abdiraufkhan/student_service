import App from "app";
import ApplicantRoute from "domain/applicant/applicant.route";
import AccessRoute from "domain/access/access.route";
import SmsRoute from "domain/sms/sms.route";
import UserRoute from "domain/user/user.route";
import SecurityRoute from "domain/security/security.route";
import PhotoUploadRoute from "domain/file-upload/profile_photo/profile_photo.route";
import PasportUploadRoute from "domain/file-upload/pasport_pdf/pasport_pdf.route";
import TranscriptUploadRoute from "domain/file-upload/transcript_pdf/transcript.route";
import DiplomUploadRoute from "domain/file-upload/diplom_pdf/diplom.route";

const app = new App([new UserRoute(), new ApplicantRoute(), new SmsRoute(), new AccessRoute(), new SecurityRoute(), new PhotoUploadRoute(), new PasportUploadRoute(), new TranscriptUploadRoute(), new DiplomUploadRoute()]);

app.run();
