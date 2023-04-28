// *
// const age = 10;
// const isOpen = true;
// const userNAme = 'Oleksandr';
// const totalPrice = 300;
// const type = typeof isOpen;
// console.log(type);

//*
// console.log('To');
// alert('Are you sure?');
// console.log('After');

//*
// const shouldRenew = confirm('Are you sure?');
// console.log(shouldRenew);

//*
// let quantity = prompt('Кількість окуляр?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//*
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log('elementWidth:', result);
// let elementHeight = '200.9';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

//*
// let salary = 1200.99;
// salary = Number(salary.toFixed());
// console.log(salary);

//*
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// let power = prompt('Давай ступінь');
// base = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);
// console.log(typeof result);

//*
// max = 100;
// min = 80;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

//*
// const message = 'Here lots of symbols';
// console.log(message.length);
// const firstName = 'Oleksandr';
// const lastName = 'Makogin';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const room = 53;
// const type = 'VIP';
// variant1
// const welcomeMsg =
//   'Guest ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' ' +
//   'have visited to' +
//   ' ' +
//   type +
//   ' ' +
//   'room' +
//   ' ' +
//   room;
//variant2
// const welcomeMsg = `Guest ${firstName} ${lastName} have visited to ${type} ${room}`;
// console.log(welcomeMsg);

//*
// const brand = prompt('SaMsung');
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

//?
// const brand = 'SamSUnG';
// console.log(brand[0]);
// console.log(brand.toLowerCase());
// console.log(brand.slice(1).toUpperCase());
// console.log(brand.slice(2, brand.length));

//task1
// const x1 = 30;
// const x2 = 50;
// const number = 51;
// console.log(`Число ${number} попадає у відрізок до точки на відрізку ${x1}?`, number < x1);
// console.log(`Число ${number} попадає у відрізок післяя точки на відрізку ${x2}?`, number > x2);
// console.log(
//   `Число ${number} попадає у відрізок між точками ${x1} і ${x2}?`,
//   number > x1 && number < x2
// );
// console.log(
//   `Число ${number} попадає до відрізку ${x1} або після ${x2}?`,
//   number < x1 || number > x2
// );

// task2
// const isFriend = true;
// const isOnline = true;
// const isDnd = false;
// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log(`Можна відкрити чат?`, canOpenChat);

// task3
// const subscription = 'unknown';
// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// If you pro or vip you can have access to content
// console.log(`Have you got access?`, canAccessContent);

//example
// if (10 > 30) {
//   console.log(`in demand`);
// } else {
//   console.log(`not in demand`);
// }

// task4
// const salary = 5001;
// if (salary <= 1000) {
//   console.log('lavel 1');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('level 2');
// } else if (salary > 3000 && salary <= 5000) {
//   console.log('level 3');
// } else {
//   console.log('lavel 4');
// }

// task5
// const balance = 0;
// let message;
// if (balance >= 0) {
//   message = 'Positive balance';
// } else {
//   message = 'Negative balance';
// }

// const message = balance >= 0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

// task6
// function multiply(a, b, c) {
//   console.log(`This function multiply ${a * b * c} `);
// }
// multiply(1, 2, 3);
// multiply(3, 3, 10);
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//task7
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// task8 --SWITCH--
// Написати скрипт вибору вартості готелю по к-сті зірок:
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$.
// const stars = 6;
// let price;
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої к-сті зірок немає');
// }
// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log('Такої к-сті зірок немає');
// }
// console.log(price);

// task9 --SWITCH--
// Написати скрипт вибору вартості готелю по к-сті зірок:
// 1,2 - 20$, 3,4 - 30$, 5 - 120$.
// const stars = 6;
// let price;
// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої к-сті зірок немає');
// }
// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log('Такої к-сті зірок немає');
// }
// console.log(price);

//task10
//Написати скрипт вибору опції доставки товару
//Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції
//Ви зможете забрати товар завтра p 12:00 в нашому офісі
//Кур'єр доставить замовлення завтра з 9:00 до 18:00
//Посилка буде відправлена сьогодні
//Вам передзвонить менеджер
// Алгоритм:
// 1.Зробити змінні
// 2.Створити switch 1, 2, 3
// 3.В кожному кейсі записати message в рядок
// 4.Зробити лог message
// const option = 2;
// let message = '';
// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар завтра p 12:00 в нашому офісі';
//     break;
//   case 2:
//     message = 'Курєр доставить замовлення завтра з 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'Посилка буде відправлена сьогодні';
//     break;
//   default:
//     message = 'Вам передзвонить менеджер';
// }
// console.log(message);

// 18.09
// Task10 from LMS
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// let message = makeMessage('Radar', 6150);
// console.log(message);
// message = makeMessage('Scanner', 3500);
// console.log(message);
// message = makeMessage('Reactor', 8000);
// console.log(message);
// message = makeMessage('Engine', 4070);
// console.log(message);

// Task11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }
// let totalPrice = calculateTotalPrice(5, 100);
// console.log(totalPrice);
// totalPrice = calculateTotalPrice(8, 60);
// console.log(totalPrice);
// totalPrice = calculateTotalPrice(3, 400);
// console.log(totalPrice);
// totalPrice = calculateTotalPrice(1, 3500);
// console.log(totalPrice);
// totalPrice = calculateTotalPrice(12, 70);
// console.log(totalPrice);

// // Task12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const priceDelivery = deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// let message = makeOrderMessage(2, 100, 50);
// console.log(message);
// message = makeOrderMessage(4, 300, 100);
// console.log(message);
// message = makeOrderMessage(10, 70, 200);
// console.log(message);

// Task13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// let passed = isAdult(20);
// console.log(passed);
// passed = isAdult(14);
// console.log(passed);
// passed = isAdult(18);
// console.log(passed);
// passed = isAdult(37);
// console.log(passed);

//Task14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }
// let isMatch = isValidPassword('mangodab3st');
// console.log(isMatch);
// isMatch = isValidPassword('kiwirul3z');
// console.log(isMatch);
// isMatch = isValidPassword('jqueryismyjam');
// console.log(isMatch);

// Task15;
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// message = checkAge(20);
// console.log(message);
// message = checkAge(8);
// console.log(message);
// message = checkAge(14);
// console.log(message);
// message = checkAge(38);
// console.log(message);

// Task16
// function checkStorage(available, ordered) {
//   let message;
//   if (available >= ordered) {
//     message = 'Order is processed, our manager will contact you.';
//   } else {
//     message = 'Not enough goods in stock!';
//   }

//   return message;
// }
// message = checkStorage(100, 50);
// console.log(message);
// message = checkStorage(100, 130);
// console.log(message);
// message = checkStorage(200, 20);
// console.log(message);
// message = checkStorage(200, 150);
// console.log(message);
// message = checkStorage(150, 180);
// console.log(message);

// Task18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = customerCredits - pricePerDroid * orderedQuantity;
//   if (customerCredits < pricePerDroid * orderedQuantity) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
//   }
//   return message;
// }
// message = makeTransaction(3000, 5, 23000);
// console.log(message);
// message = makeTransaction(1000, 3, 15000);
// console.log(message);
// message = makeTransaction(5000, 10, 8000);
// console.log(message);
// message = makeTransaction(5000, 10, 8000);
// console.log(message);
// message = makeTransaction(2000, 8, 10000);
// console.log(message);
// message = makeTransaction(500, 10, 5000);
// console.log(message);
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const left = customerCredits - totalPrice;
//   if (customerCredits < pricePerDroid * orderedQuantity) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${left} credits left`;
//   }
//   return message;
// }
// message = makeTransaction(3000, 5, 23000);
// console.log(message);
// message = makeTransaction(1000, 3, 15000);
// console.log(message);
// message = makeTransaction(5000, 10, 8000);
// console.log(message);
// message = makeTransaction(5000, 10, 8000);
// console.log(message);
// message = makeTransaction(2000, 8, 10000);
// console.log(message);
// message = makeTransaction(500, 10, 5000);
// console.log(message);

// Task19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === 'jqueryismyjam') {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// message = checkPassword('mangohackzor');
// console.log(message);
// message = checkPassword(null);
// console.log(message);
// message = checkPassword('polyhax');
// console.log(message);
// message = checkPassword('jqueryismyjam');
// console.log(message);

// Task20
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (available >= ordered) {
//     message = 'The order is accepted, our manager will contact you';
//   } else if (available < ordered) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   }
//   return message;
// }
// message = checkStorage(100, 50);
// console.log(message);
// message = checkStorage(100, 130);
// console.log(message);
// message = checkStorage(70, 0);
// console.log(message);
// message = checkStorage(200, 20);
// console.log(message);
// message = checkStorage(200, 250);
// console.log(message);
// message = checkStorage(150, 0);
// console.log(message);

// Task21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }
// let isInRange = isNumberInRange(10, 30, 17);
// console.log(isInRange);
// isInRange = isNumberInRange(10, 30, 5);
// console.log(isInRange);
// isInRange = isNumberInRange(20, 50, 24);
// console.log(isInRange);
// isInRange = isNumberInRange(20, 50, 76);
// console.log(isInRange);

// Task22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'vip' || subType === 'pro';

//   return canAccessContent;
// }
// let canAccessContent = checkIfCanAccessContent('pro');
// console.log(canAccessContent);
// canAccessContent = checkIfCanAccessContent('starter');
// console.log(canAccessContent);
// canAccessContent = checkIfCanAccessContent('vip');
// console.log(canAccessContent);
// canAccessContent = checkIfCanAccessContent('free');
// console.log(canAccessContent);

// Task23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }
// let isNotRange = isNumberNotInRange(10, 30, 17);
// console.log(isNotRange);
// isNotRange = isNumberNotInRange(10, 30, 5);
// console.log(isNotRange);
// isNotRange = isNumberNotInRange(20, 50, 24);
// console.log(isNotRange);
// isNotRange = isNumberNotInRange(20, 50, 76);
// console.log(isNotRange);

// Task24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// let discount = getDiscount(137000);
// console.log(discount);
// discount = getDiscount(46900);
// console.log(discount);
// discount = getDiscount(8250);
// console.log(discount);
// discount = getDiscount(1300);
// console.log(discount);
// discount = getDiscount(5000);
// console.log(discount);
// discount = getDiscount(20000);
// console.log(discount);
// discount = getDiscount(50000);
// console.log(discount);

// Task25
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   return message;
// }
// message = checkStorage(100, 50);
// console.log(message);
// message = checkStorage(100, 130);
// console.log(message);
// message = checkStorage(200, 20);
// console.log(message);
// message = checkStorage(200, 150);
// console.log(message);
// message = checkStorage(150, 180);
// console.log(message);

// Task26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   return message;
// }
// let message = checkPassword('jqueryismyjam');
// console.log(message);
// message = checkPassword('angul4r1sl1f3');
// console.log(message);
// message = checkPassword('r3actsux');
// console.log(message);

// Task27
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//   }

//   return price;
// }
// price = getSubscriptionPrice('professional');
// console.log(price);
// price = getSubscriptionPrice('organization');
// console.log(price);
// price = getSubscriptionPrice('starter');
// console.log(price);

// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).
// Task28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// message = checkPassword('mangohackzor');
// console.log(message);
// message = checkPassword(null);
// console.log(message);
// message = checkPassword('polyhax');
// console.log(message);
// message = checkPassword('jqueryismyjam');
// console.log(message);

// Task29 Not sure
// function getShippingCost(country, price) {
//   let message;

//   switch (country) {
//     case 'Australia':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'China':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost ${price}  credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost ${price}  credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   return message;
// }
// message = getShippingCost('Australia', 170);
// console.log(message);
// message = getShippingCost('Germany');
// console.log(message);
// message = getShippingCost('China', 100);
// console.log(message);
// message = getShippingCost('Chile', 250);
// console.log(message);
// message = getShippingCost('Jamaica', 120);
// console.log(message);
// message = getShippingCost('Sweden');
// console.log(message);

// Module1 Part2 !Important to notice!
// for (let i = 500; i >= 0; i -= 50) {
//   console.log(i);
// }
// console.log('dfdfdfdf');

// Task30
// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
// Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// let message = getNameLength('Poly');
// console.log(message);
// message = getNameLength('Harambe');
// console.log(message);
// message = getNameLength('Billy');
// console.log(message);
// message = getNameLength('Joe');
// console.log(message);

// Task31
// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Task32 need attention
// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// substring = getSubstring('Hello world', 3);
// console.log(substring);
// substring = getSubstring('Hello world', 6);
// console.log(substring);
// substring = getSubstring('Hello world', 8);
// console.log(substring);
// substring = getSubstring('Hello world', 11);
// console.log(substring);
// substring = getSubstring('Hello world', 0);
// console.log(substring);

// Task 33
// Функція formatMessage(message, maxLength) приймає рядок(параметр message) і форматує його,
//     якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...",
//     після чого повертає скорочену версію.
// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"
// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// Task 34
// Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній.
// Наприклад, під час пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng',
//     а порівняти її потрібно з рядком 'samsung' або 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
// Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка,
//     тобто перетворити всі його символи у верхній або нижній регістр.Методи рядка toLowerCase() і toUpperCase()
//      повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// Функція normalizeInput(input) приймає рядок(параметр input) і повертає такий самий рядок, але в нижньому регістрі.
//  Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }
// console.log(normalizeInput('Hello world'));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput('Big SALE'));

// Task 35
// Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок,
//     повертає буль - true, якщо входить, і false - в іншому випадку.Регістр символів в рядку і підрядку має значення,
//         оскільки, наприклад літера "a" не дорівнює літері "А".

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false
// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження
//  підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я (параметр fullname).
//  Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// Оголошена функція checkForName(fullname, name).
// Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
// Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
// Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
// Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
// Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));
// console.log(checkForName('Egor Kolbasov', 'Zhenya'));
// console.log(checkForName('Vadim Nekrasov', 'Vadim'));
// console.log(checkForName('Vadim Nekrasov', 'vadim'));
// console.log(checkForName('Vadim Nekrasov', 'Dima'));

// Task 36
// Функція checkForSpam(message) приймає рядок(параметр message),
//     перевіряє його на вміст заборонених слів spam і sale,
//         і повертає результат перевірки.Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true
// function checkForSpam(message) {
//   let result = message.toLowerCase();

//   return result.includes('spam') || result.includes('sale');
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));
