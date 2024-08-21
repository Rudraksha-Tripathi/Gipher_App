export class User {
    emailId: string;
    userName: string;
    password: string;
    date: Date;
    image: any;
    gender: string;
    mobileNumber: string;

    constructor() {
        this.emailId = "";
        this.userName = "";
        this.password = "";
        this.date = new Date();
        this.gender = "";
        this.mobileNumber = "";
        this.image = '';
    }
}