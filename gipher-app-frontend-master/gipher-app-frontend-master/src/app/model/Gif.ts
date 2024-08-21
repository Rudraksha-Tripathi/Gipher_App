// class Recommendations {
//     count: number;
//     userEmail: Array<string>;

//     constructor() {
//         this.count = 0;
//         this.userEmail = [];
//     }
// }

export class Gif {
    id: string;
    username: string;
    title: string;
    imageURL: string;
    isSticker: number;
    recommended: Array<string>;

    constructor() {
        this.id = "";
        this.username = "";
        this.title = "";
        this.imageURL = "";
        this.isSticker = 0;
        this.recommended = [];
    }
}

export class Giffy {
    favId: string;
    username: string;
    emailId:string;
    title: string;
    imageURL: string;
    isSticker: number;
    constructor() {
        this.favId = "";
        this.username = "";
        this.emailId = "";
        this.title = "";
        this.imageURL = "";
        this.isSticker = 0;
        
    }
}