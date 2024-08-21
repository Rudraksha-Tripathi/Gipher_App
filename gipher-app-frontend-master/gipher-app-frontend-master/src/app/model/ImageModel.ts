export class ImageModel {
    _id: number;
    name: string;
    type: string;
    pic: Array<any>

    constructor() {
        this._id = 0;
        this.name="";
        this.type="";
        this.pic=[];
    }
}