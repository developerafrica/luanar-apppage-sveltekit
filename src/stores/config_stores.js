import { writable } from "svelte/store";
import { browser } from "$app/env"

let dark = false 

const key = "darkkey-MWS-V.1.1.1-BUTAO"
if (browser) {
    if (localStorage.getItem(key) != null) {
        let localDark = localStorage.getItem(key)
        dark = JSON.parse(localDark)                
    }    
}
export const config_stores = writable({dark})