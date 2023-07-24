import DiplomUploadRepo from "./diplom-pdf.repo";


class DiplomUploadService{
    public repo = new DiplomUploadRepo();

    public async upload (file){
        return this.repo.upload(file);
    }
}

export default DiplomUploadService;