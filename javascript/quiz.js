//Q1. make a string out of an array
//mine, solution
const fruits = ["apple", "banana", "orange"];
const fruitsStr = fruits.join();

//Q2. make an array out of a string
//mine
const fruits = "🍎, 🥝, 🍌, 🍒";
let fruitsArr = [];
fruitsArr = fruits;
//solution
const result = fruits.split(",");
console.log(result);

//Q3. make this array look like this: [5,4,3,2,1]
//mine, solution
const array = [1, 2, 3, 4, 5];
let arrayNew = array.reverse();

//Q4. make new array without the first two elements
//mine
const array = [1, 2, 3, 4, 5];
const arrayNew = [];
for (let i = 2; i < array.length; i++) {
  arrayNew.push(array[i]);
}
//solution
const result = array.slice(2, 5);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
//mine
for (let i = 0; i < students.length; i++) {
  if (students[i].score === 90) {
    console.log(students[i].name);
  }
}
//solution
const result = students.find((student) => student.score === 90);

// Q6. make an array of enrolled students
//mine
const studentsList = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].enrolled === true) {
    studentsList.push(students[i].name);
  }
}
//solution
const result = sutdents.filter((students) => student.enrolled);

// Q7. make an array containing only the students' scores
//mine
const scoreList = [];
for (let i = 0; i < students.length; i++) {
  scoreList.push(students[i].score);
}
//solution - map은 return 값으로 값을 변환해주는 함수
const result = students.map((student) => student.score);

// Q8. check if there is a student with the score lower than 50
//mine
for (let i = 0; i < students.length; i++) {
  if (students[i].score < 50) {
    console.log("Exist");
    break;
  }
}
//solution1
const result = students.some((student) => student.score < 50);
//solution2 - 아래처럼 앞에 !를 쓰면 결과값이 반대로 출력됨
const result2 = !students.every((student) => student.score >= 50);

// Q9. compute students' average score
//mine
let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].score;
}
console.log(sum / students.length);
//solution
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(resut / students.length);
//reduce에서는 return하는 값이 그다음번 호출의 prev로 들어간다

// Q10. make a string containing all the scores 모르겠다.
//mine
const scoreStr = students.score.join();
console.log(scoreStr);
//solution
const result = stduents
  .map((student) => student.score)
  //.filter(score => score >= 50) 50점 이하의 점수를 거르고 싶다면
  .join();

// Bonus! do Q10 sorted in ascending order
//solutionn
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) //내림차순으로 하려면 a-b가 아닌 b-a
  .join();
