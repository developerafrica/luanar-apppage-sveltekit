import { writable } from "svelte/store";

class UuidObj {

    static idOne() {

        const str = 'abcdefghijklm';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static idTwo() {

        const str = 'nopqrstuvwxyz';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static uuid() {
        const idOne = this.idOne();
        const idTwo = this.idTwo();

        const id = `${idOne}${idTwo}`;



        if (id.length == 3) {

            const num = `${Math.floor(Math.random() * 9)}`;

            const idMod = id + num;

            return idMod;

        } else if (id.length == 2) {

            const numM1 = `${Math.floor(Math.random() * 9)}`;
            const numM2 = `${Math.floor(Math.random() * 9)}`;

            const idMod2 = id + numM1 + numM2;

            return idMod2;


        } else {
            return id;
        };
    };
}

class ArtistObj{
    constructor(nm,av, ds, pd){
        this.name = nm;
        this.avatar = av;
        this.id = UuidObj.uuid();
        this.description = ds;
        this.products = pd;
    }
}

class ProductObj{
    constructor(tl, tp, pr, sz, im){
        this.id = UuidObj.uuid();
        this.title = tl;
        this.price = pr;
        this.type = tp;
        this.size = sz;
        this.image =im;
    }
} 




const data = [
    new ArtistObj("yamikani njiragoma", "3d image", "3d artist", [
        new ProductObj("my yellow", "drawing", 75.00, "23-45 inches", "/maka3.png")
    ]),
    new ArtistObj("yamikani njiragoma", "3d image", "3d artist", [
        new ProductObj("my yellow", "drawing", 75.00, "23-45 inches", "/maka4.png")
    ]),
    new ArtistObj("yamikani njiragoma", "3d image", "3d artist", [
        new ProductObj("my yellow", "drawing", 75.00, "23-45 inches", "/maka5.png")
    ])
]

export const stores = writable({data})