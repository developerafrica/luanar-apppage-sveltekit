import {writable} from "svelte/store"


class DownloadObj{
    constructor(nm,lcP,caP, dtP, chP){
        this.id = "234u03092";
        this.app = `APPS/${lcP}`;
        this.campus = caP;
        this.programme = nm;
        this.datemodified = dtP;
        this.changes = chP;
        this.displayName=`${nm}  |  ${caP} ${lcP}`.toUpperCase();
    }
}

class ProgramApps{
    constructor(lcP){
        this.location = lcP
    }
}
const data = [
    new DownloadObj("BSSY","BSSY/LUANAR-D4.apk", "bunda", "09-10-2022",["notifications added"] ),
    new DownloadObj("BAGR","BAGR/LUANAR-D4.apk", "bunda", "09-10-2022",["notifications added"] ),
]
export const downloadStores = writable({data})