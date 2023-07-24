import PhotoUploadRepo from "./profile-photo.repo";

class PhotoUploadServise{
    public repo = new PhotoUploadRepo();

    public async upload (file){
        return this.repo.upload(file);
    }
}

export default PhotoUploadServise;