const submissions = [
  {name: "Jane", score: 95, date: "2020-01-24", passed: true},
  {name: "Joe", score: 77, date: "2018-05-14", passed: true},
  {name: "Jack", score: 59, date: "2019-07-05", passed: false},
  {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];

console.log(submissions);


const addSubmissions = (array, newName, newScore, newDate) => {
  let name = newName
  let score = newScore
  let date = newDate
  if(score >= 60){
    array.push({name, score, date, passed: true});
  }
  else{
    array.push({name, score, date, passed: false});
  }}
  addSubmissions(submissions, "Jake", 89, "2022-07-19");

  const deleteSubmissionByIndex = (array, index) => {
    return array.splice(index)
  }
 //deleteSubmissionByIndex(submissions, 4);

 const byName = submissions.findIndex((person) => {
  return person.name === "Jake";
 });

 const deleteSubmissionByName = (array, name) => {
  return array.splice(name);
 }
 //deleteSubmissionByName(submissions, byName);


const editSubmission = (array, index, score) => {
  
  if (score >= 60){
    array[byName].passed = true;
    array[byName].score = score; 
  }
  else{
    array[byName].passed = false;
    array[byName].score = score; 
  }
}
editSubmission(submissions, byName, 60);

const findSubmissionByName = (array, name) => {
  return array.find((person) => {
    return person.name === "Jake";
   });
}

console.log(findSubmissionByName(submissions, "Jake"));

function findLowestScore(array){
  let lowest = array[0];

  array.forEach((element) => {
    if (element.score < lowest.score){
      lowest = element;
    }
  });
  return lowest;
}
console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let sum = 0;
  for(const element of array){
    sum += element.score;
  }
  return sum / array.length;
}
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((element) => {
    return element.passed;
  });
}
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((element) => {
    return element.score >= 90;
  });
}
console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
 let num = start;
 const range = [];

  while (num <= end){
    range.push(num);
    num++;
  }
  return range;
}
console.log(createRange(1, 10));

const countElements = (array) => {
  let counts = {};
  for (const element of array) {
    if(counts[element]){
      counts[element] += 1;
    }
    else{
      counts[element] = 1;
    }
  }
  return counts;
}

console.log(countElements(["a", "b", "a", "c", "a", "b"]));