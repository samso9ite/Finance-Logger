import { HasFormatter } from "../interfaces/HasFormatter.js"
export class Payment implements HasFormatter {
    // client : string;
    // details : string;
    // amount : number;

    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(
        public recipient:  string,
        public details: string,
        public amount : number,
    ){}
    format() {
        return `${this.recipient} owed $${this.amount} for ${this.details}`
    }
}