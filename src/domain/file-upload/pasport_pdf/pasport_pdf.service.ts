import PasportUploadRepo from "./pasport-pdf.repo";

class PasportUploadService{
    public repo = new PasportUploadRepo();

    public async upload (file){
        return this.repo.upload(file);
    }
}

export default PasportUploadService;