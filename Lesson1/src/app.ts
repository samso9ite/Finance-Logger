class Invoice {
    client : string;
    details: string;
    amount: number;

    constructor(c:string, d:string, a:number){
        this.client = c
        this.details = d
        this.amount = a
    }
    
    format() {
        return `${this.client} owes N${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on an online store', 500)
const invTwo = new Invoice('Temitope', 'worked on building a mobile app', 1000)
const invThree = new Invoice('Samson', 'worked on developing a ML application', 4000)

console.log(invThree, invOne);
