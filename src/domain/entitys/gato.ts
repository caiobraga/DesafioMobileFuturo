export class Gato {
    private id: string;
    private url: string;
    private width: number;
    private height: number;


    constructor(id?:string, url?:string, width?:number, height?:number){
        this.id = id? id : "";
        this.url = url? url : "";
        this.width = width? width : 0;
        this.height = height? height : 0;
    }

    getId(): string {
        return this.id;
    }

    getUrl(): string {
        return this.url;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height
    }
}