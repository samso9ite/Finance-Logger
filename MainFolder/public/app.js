// import { Invoice } from  './classes/Invoice.js';
// console.log(invoiceOne, invoiceTwo, invoiceFour);
// interface isPerson {
//     name: String;
//     age: Number;
//     speak(a: string): void;
//     spend(b: number): number;
// }
// const me: isPerson = {
//     name: 'Samso9ite',
//     age: 25,
//     speak(text: string):void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     }
// }
// const greetPerson = (person: isPerson) => {
//     console.log(person.name, 'is', person.age, person.spend);
// }
// greetPerson(me)
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// const invoiceOne = new Invoice('mario', 'worked on online store', 500)
// const invoiceTwo = new Invoice('Samso9te', 'worked on face recognition app', 5000)
// const invoiceThree = new Invoice('Tomisin', 'worked on website', 100)
// const invoiceFour = new Invoice('Tolani', 'worked on website', 100)
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Samso9ite", "work on the house", 300,)
// docTwo = new Invoice("Temilola", "Worked on the boat", 5000)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo)
// invoices.forEach(inv => {console.log(inv.client, inv.details, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List Template Instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'payment') {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
