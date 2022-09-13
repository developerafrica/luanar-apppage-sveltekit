import {writable} from "svelte/store"


class DownloadObj{
    constructor(nm,caP, dtP, chP){
        this.id = "234u03092";
        this.app = `app/${nm}/luanarapp.apk`;
        this.campus = caP;
        this.programme = nm;
        this.datemodified = dtP;
        this.changes = chP;
    }
}
const data = [
    new DownloadObj("bssy", "bunda", "09-10-2022",["notifications added"] ),
    new DownloadObj("bssy", "bunda", "09-10-2022",["notifications added"] ),
    new DownloadObj("bssy", "bunda", "09-10-2022",["notifications added"] ),
    new DownloadObj("bssy", "city", "09-10-2022",["notifications added"] ),
    new DownloadObj("bssy", "city", "09-10-2022",["notifications added"] ),
]

export const downloadStores = writable({data})