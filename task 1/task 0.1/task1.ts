import promptSync from 'prompt-sync';

const prompt = promptSync();

let engMarks:number;
let mathMarks:number;
let sciMarks:number;

engMarks = Number(prompt(`Enter your english marks.`));
mathMarks  = Number(prompt(`Enter your maths marks.`));
sciMarks = Number(prompt(`Enter your science marks.`));

const total = (engMarks+mathMarks+sciMarks)/3;

console.log(`Your average marks are: ${total.toFixed(2)}`);


