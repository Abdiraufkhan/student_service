import TranscriptUploadRepo from "./transcript.repo";

class TranscriptUploadServise{
    public repo = new TranscriptUploadRepo();

    public async upload (file){
        return this.repo.upload(file);
    }
}

export default TranscriptUploadServise;