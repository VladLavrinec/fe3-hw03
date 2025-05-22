// 1
const result= 5+5+'5';
console.log(typeof result);

// 2
const email = prompt("Ведіть вашу електронну пошту: ");
const includeEmail = email.includes("@");
const lengthEmail = email.length;
console.log(includeEmail);
console.log(lengthEmail);

// 3
const my = "My";
const name1 = "name";
const is = "is";
const fullName = `${my} ${name1} ${is}` + " " + "Viktor";
console.log(fullName);

// 4 
const userName = prompt("Ведіть ваше ім'я: ");
const payment = prompt("Ведіть суму оплати:")
alert(`Дякуємо, ${userName}! До сплати ${payment} грн`);