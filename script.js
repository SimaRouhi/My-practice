// const animals = ['lion', 'tiger', 'bear'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }



// for (let i = 1; i <= 10; i++) {
//    console.log(`i is : ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is : ${j}`)
//     }
// }



// const seats = [
//     ['kr', 'ju', 'an'],
//     ['ge', 'er', 'na'],
//     ['yu', 'sa', 'ei']
// ];
// for (let i = 0; i < seats.length; i++) {
//     console.log(`Row #${i+1}`)
//     const row = seats[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }



// let num = 0;
//  while (num < 10) {
//     console.log(num)
//     num++;
// //  }



// const secret = 'Baby';
// let guess = prompt('Enter the secret code...');
// while (guess !== secret) {
//     guess = prompt('wrong! enter the code...');
// }
//     console.log('Congrats you got the secret!')



// let input = prompt('Hey,say something!');
// while (true) {
//     input = prompt(input);
//     if (input === 'Stop copying me') {
//         break;
//     }
// }
//console.log('Ok,You win!')



// let maximum = parseInt(prompt('Enter the maximum number'));
// while (!maximum) {
//     maximum = parseInt(prompt('Enter a valid number'))
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let guess = parseInt(prompt('Enter your guess:'));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') {
//     break;
//     }    
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt('Too high! Enter a new guess:');
//     }else {
//          guess = prompt('Too low! Enter a new guess:');
//      }
// }
// if (guess === 'q') {
//     console.log('Ok, you quite.')
// }else {
//     console.log(`Congrats,you got it!It took you ${attempts} guesses.`)
// }



// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics'];
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`visit reddit.com/r/${subreddits[i]}`)
// }

//another version:
// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics'];
// for (let sub of subreddits) {
//     console.log(`visit reddit.com/r/${sub}`)
// }



// const names = [
//     ['kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < names.length; i++) {
//     const row = names[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

//another version:
// const names = [
//     ['kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let row of names) {
//     for (let students of row) {
//         console.log(students)
//     }
// }



// const testScore = {
//     Demon : 80,
//     Kim : 89,
//     Tom : 71,
//     Simon : 99,
//     sahar : 90
// }
// for (let person in testScore) {
//     console.log(`${person} scored ${testScore[person]}`)
// }



// const testScores = {
//         Demon : 80,
//         Kim : 89,
//         Tom : 71,
//         Simon : 99,
//         sahar : 90
// }
// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total/scores.length)



// let input = prompt('Give me an order');
// const myList = ['Wake up', 'Cleaning'];
// while (input !== 'quit' && input !== 'q') {
//    if (input === 'list') {
//       console.log('**********')
//       for (let i = 0; i < myList.length; i++) {
//       console.log(`${i} : ${myList[i]}`);
//       }
//        console.log('**********')
//     } else if (input === 'new') {
//     const newTask = prompt('Add a task');
//     myList.push(newTask);
//     console.log(`${newTask} added to the list`)
//     } else if (input === 'delete') {
//     const index = parseInt(prompt('Insert task number'));
//       if (!Number.isNaN(index)) {
//         const deletedOne = myList.splice(index, 1);
//         console.log(`${deletedOne[0]} deleted from the list`);
//       } else {
//         console.log('Unknown index!')
//       }
//     }
//     input = prompt('Give me an order')
// }
// console.log('Ok,you quite!')



// let prom = prompt('Give me an order');
// const myList = [];
// while (true) {
// switch (prom) {
//     case 'quite' :
//         break;

//     case 'new' :
//         let newTask = prompt('Add a task');
//         myList.push(newTask);
    
//     case 'list' :
//         for (let tasks of myList) {
//             console.log(`${tasks}`);
//         }

//     case 'Delete' :
//         let deletedOne = prompt('Insert task number');
//         myList.splice(deletedOne, 1)
// }
// }
// console.log('Ok,you quite!')



// let input = prompt('Give me an order');
// const myList = ['Wake up', 'Cleaning'];
// while (input != 'quit' && input != 'q') {
//    if (input == 'list') {
//        console.log('**********')
//        for (let i = 0; i < myList.length; i++) {
//         console.log(`${i} : ${myList[i]}`);
//        }
//        console.log('**********')
//     } else if (input == 'new') {
//     const newTask = prompt('Add a task');
//     myList.push(newTask);
//     console.log(`${newTask} added to the list`)
//     } else if (input == 'delete') {
//     const index = parseInt(prompt('Insert task number'));
//       if (!Number.isNaN(index)) {
//         const deletedOne = myList.splice(index, 1);
//         console.log(`${deletedOne[0]} deleted from the list`);
//       } else {
//         console.log('Unknown index!')
//       }
//     }
//     input = prompt('Give me an order')
// }
// console.log('Ok,you quite!')
