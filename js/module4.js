// Функція зворотного виклику(callback, колбек) -
//   це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// Функція вищого порядку(higher order function) -
//   функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }
// registerGuest('Манго', greet);

// Ми передали посилання на функцію greet як аргумент,
//     тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок.
//     Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Інлайн колбеки
// Якщо колбек - функція - маленька, і потрібна тільки для передачі аргументом,
//     її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.
//     Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності
//  абонента до двох заздалегідь визначених дій.Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму ?

//     Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання,
//         робити перевірки і виконувати потрібний код.Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

// Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер,
//     виконання заздалегідь невідомих функцій тощо.У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

// массив.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Task 2
// Доповни функцію makeMessage таким чином,
//     щоб вона очікувала другим параметром(параметр callback) колбек - функцію і повертала її виклик.
//     Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// Task 3
// Доповни другий виклик функції makePizza(pizzaName, callback),
//     передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Task 4
// Необхідно написати логіку обробки замовлення піци.
//  Виконай рефакторинг методу order таким чином,
//     щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onError,
//         передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return console.log(onSuccess(pizzaName));
//     }
//     return console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// Task 5
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//   і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Task 6
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
//   в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Task 7
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray,
//   і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// Task 13
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//   значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
//   а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]

// function changeEven(numbers, value) {
//   let newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// Task 14
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => {
//   console.log(planet.length);
//   return planet.length;
// });

// console.log(planetsLengths);

// Task 15
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив["The Last Kingdom", "Beside Still Waters",
//   "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => {

//   return book.rating;
// });

// console.log(titles);

// Task 16
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => {

//   console.log(book.genres);

//   return book.genres;
// });

// console.log(genres);

// Task 17
// Доповни функцію getUserNames(users) таким чином,
//   щоб вона повертала масив імен користувачів(властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const users = [
//   { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
//   { name: 'Sharlene Bush' },
//   { name: 'Ross Vazquez' },
//   { name: 'Elma Head' },
//   { name: 'Carey Barr' },
//   { name: 'Blackburn Dotson' },
//   { name: 'Sheree Anthony' },
// ];

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));

// Task 18
// const getUserEmails = users => users.map(user => user.email);
// console.log(getUserEmails(users));

// Task 19
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
//   а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// Task 20
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres) з масиву books,
//   а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);
// console.log(uniqueGenres);

// Task 21
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

// Task 22
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
//   у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// Task 23
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів,
//   вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно,
//   функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно,
//   функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age >= minAge && user.age <= maxAge);

// console.log(getUsersWithAge([{ name: 'Sasha', age: 23 }], 20, 50));

// Task 24
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів,
//   у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker",
//   функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry",
//   функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross",
//   функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// console.log(
//   getUsersWithFriend(
//     [
//       { name: 'Sharlene Bush', friends: 'Briana Decker' },
//       { name: 'Sheree Anthony', friends: 'Briana Decker' },
//     ],
//     'Briana Decker'
//   )
// );

// console.log(
//   getUsersWithFriend(
//     [
//       { name: 'Elma Head', friends: 'Goldie Gentry' },
//       { name: 'Sheree Anthony', friends: 'Goldie Gentry' },
//     ],
//     'Goldie Gentry'
//   )
// );

// Task 25
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів(властивість friends).
//  У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив
// ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison",
// "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// const users = [
//   { name: 'Sasha', friends: 'Sharron Pace' },
//   { name: 'Oleh', friends: 'Briana Decker' },
//   { name: 'Yura', friends: 'Marilyn Mcintosh' },
//   { name: 'Roksolana', friends: 'Padilla Garrison' },
//   { name: 'Oleksandr', friends: 'Sharron Pace' },
//   { name: 'Petro', friends: 'Jordan Sampson' },
// ];

// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(getFriends(users));

// Task 26
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів,
//     значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами
// Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getActiveUsers = users =>
//     users.filter(user => user.isActive === true);

// Task 28

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookByAuthor);

// Task 29
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
//  пошта якого(властивість email) збігається зі значенням параметра email.

// Оголошена функція getUserWithEmail(users, email)

// Для перебирання параметра users використовується метод find()

// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony

// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head

// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson

// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined

// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// Task 35
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//     і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна,
//         розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, values) => (total += values.playtime / values.gamesPlayed),
//   0
// );

// console.log(totalAveragePlaytimePerGame);

// Task 37
// Доповни функцію getTotalFriendCount(users) таким чином,
//     щоб вона рахувала і повертала загальну кількість друзів(властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()

// const getTotalFriendCount = users => users.reduce((acc, { friends }) => acc + friends.length, 0);

// console.log(
//   getTotalFriendCount([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ])
// );
