export class Comment {
    _id: string;
    creationDate: Date;
    content: string;
    gifId: string;
    userEmail: string;
    likedBy: Array<String>;

    constructor() {
        this._id = "";
        this.creationDate = new Date();
        this.content = "";
        this.gifId = "";
        this.userEmail = "";
        this.likedBy = [];
    }
}