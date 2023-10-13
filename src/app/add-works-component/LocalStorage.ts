import { Content } from "./Content";

export class LocalStorage {
    private localStorageKey:string="content"

    storedData: Content[]

    constructor() {
        this.storedData = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]',(key,value) => {
            return value;
        });
    
    }

    addContentToStroage(name:string,content:string) {
        this.storedData.push(new Content(content));
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.storedData));
    }

    get getContentFromStorage(): Content[] {
        
        return this.storedData;
    }

    updateContent(updatedContent: Content[]) {

        this.storedData = updatedContent;
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.storedData));
    }
}