// Practice with Alyona

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']
// class Student {
//   #name;
//   #email;
//   #homeworkResults;
//   constructor(name, email, homeworkResults = []) {
//     this.#name = name;
//     this.#email = email;
//     this.#homeworkResults = homeworkResults;
//   }
//   getName() {
//     return this.#name;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   getHomeworkResults(topic, success) {
//     return this.#homeworkResults;
//   }
// }

// const listOfStudents = [
//   {
//     name: 'John',
//     email: 'john@gmail.com',
//   },
//   {
//     name: 'Jane',
//     email: 'jane@gmail.com',
//   },
//   {
//     name: 'Jack',
//     email: 'jack@gmail.com',
//   },
//   {
//     name: 'Mary',
//     email: 'mary@gmail.com',
//   },
//   {
//     name: 'Robert',
//     email: 'robert@gmail.com',
//   },
//   {
//     name: 'Ann',
//     email: 'ann@gmail.com',
//   },
//   {
//     name: 'Brad',
//     email: 'brad@gmail.com',
//   },
//   {
//     name: 'Lisa',
//     email: 'lisa@gmail.com',
//   },
//   {
//     name: 'Matthew',
//     email: 'matthew@gmail.com',
//   },
//   {
//     name: 'Sandra',
//     email: 'sandra@gmail.com',
//   },
// ];

// const homeworkResults = [
//   {
//     topic: 'HTML Basics',
//     results: [
//       {
//         email: 'john@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jane@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jack@gmail.com',
//         success: true,
//       },
//       {
//         email: 'mary@gmail.com',
//         success: true,
//       },
//       {
//         email: 'robert@gmail.com',
//         success: true,
//       },
//       {
//         email: 'ann@gmail.com',
//         success: true,
//       },
//       {
//         email: 'brad@gmail.com',
//         success: true,
//       },
//       {
//         email: 'lisa@gmail.com',
//         success: true,
//       },
//       {
//         email: 'matthew@gmail.com',
//         success: true,
//       },
//       {
//         email: 'sandra@gmail.com',
//         success: true,
//       },
//     ],
//   },
//   {
//     topic: 'CSS Basics',
//     results: [
//       {
//         email: 'john@gmail.com',
//         success: false,
//       },
//       {
//         email: 'jane@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jack@gmail.com',
//         success: true,
//       },
//       {
//         email: 'mary@gmail.com',
//         success: false,
//       },
//       {
//         email: 'robert@gmail.com',
//         success: true,
//       },
//       {
//         email: 'ann@gmail.com',
//         success: true,
//       },
//       {
//         email: 'brad@gmail.com',
//         success: true,
//       },
//       {
//         email: 'lisa@gmail.com',
//         success: false,
//       },
//       {
//         email: 'matthew@gmail.com',
//         success: true,
//       },
//       {
//         email: 'sandra@gmail.com',
//         success: true,
//       },
//     ],
//   },
//   {
//     topic: 'JS Basics',
//     results: [
//       {
//         email: 'john@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jane@gmail.com',
//         success: false,
//       },
//       {
//         email: 'jack@gmail.com',
//         success: true,
//       },
//       {
//         email: 'mary@gmail.com',
//         success: true,
//       },
//       {
//         email: 'robert@gmail.com',
//         success: true,
//       },
//       {
//         email: 'ann@gmail.com',
//         success: false,
//       },
//       {
//         email: 'brad@gmail.com',
//         success: true,
//       },
//       {
//         email: 'lisa@gmail.com',
//         success: true,
//       },
//       {
//         email: 'matthew@gmail.com',
//         success: false,
//       },
//       {
//         email: 'sandra@gmail.com',
//         success: true,
//       },
//     ],
//   },
//   {
//     topic: 'DOM',
//     results: [
//       {
//         email: 'john@gmail.com',
//         success: false,
//       },
//       {
//         email: 'jane@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jack@gmail.com',
//         success: true,
//       },
//       {
//         email: 'mary@gmail.com',
//         success: true,
//       },
//       {
//         email: 'robert@gmail.com',
//         success: false,
//       },
//       {
//         email: 'ann@gmail.com',
//         success: true,
//       },
//       {
//         email: 'brad@gmail.com',
//         success: true,
//       },
//       {
//         email: 'lisa@gmail.com',
//         success: true,
//       },
//       {
//         email: 'matthew@gmail.com',
//         success: false,
//       },
//       {
//         email: 'sandra@gmail.com',
//         success: true,
//       },
//     ],
//   },
//   {
//     topic: 'AJAX',
//     results: [
//       {
//         email: 'john@gmail.com',
//         success: false,
//       },
//       {
//         email: 'jane@gmail.com',
//         success: true,
//       },
//       {
//         email: 'jack@gmail.com',
//         success: false,
//       },
//       {
//         email: 'mary@gmail.com',
//         success: true,
//       },
//       {
//         email: 'robert@gmail.com',
//         success: true,
//       },
//       {
//         email: 'ann@gmail.com',
//         success: false,
//       },
//       {
//         email: 'brad@gmail.com',
//         success: true,
//       },
//       {
//         email: 'lisa@gmail.com',
//         success: true,
//       },
//       {
//         email: 'matthew@gmail.com',
//         success: true,
//       },
//       {
//         email: 'sandra@gmail.com',
//         success: true,
//       },
//     ],
//   },
// ];

// class School {
//   constructor(students) {
//     this.students = students.map(student => new Student(student.name, student.email));
//     console.log(this.students);
//   }

//   printStudentsList() {
//     this.students.forEach(student => {
//       console.log(student.getName(), student.getEmail());
//       console.log(student.getHomeworkResults());
//     });
//   }

//   addHomeworkResults(studentsResults) {
//     this.students.forEach(student => {
//       studentsResults.forEach(result => {
//         if (student.getEmail() === result.results.email) {
//         }
//       });
//     });
//   }
// }

// const newSchool = new School(listOfStudents);

// newSchool.printStudentsList();

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// console.log();
