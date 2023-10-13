
export class Content {
    details: string;
    constructor(details: string) {
        this.details=details
    }

    get getDetails(): string {
        return this.details;
    }

    set setDetails( details: string) {
        this.details = details;
    }

 }