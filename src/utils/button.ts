export class Button {
    display: string;
    img?: string;
    info?: string;

    constructor(display: string, img?: string, info?: string) {
        this.display = display;
        this.img = img;
        this.info = info;
    }
}