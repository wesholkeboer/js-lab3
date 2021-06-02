"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 98,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let passed = null;
  if (newScore >= 60) {
    passed = true;
  } else {
    passed = false;
  }
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: passed,
  };
  array.push(newObject);
};

const addSubmission2 = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

// addSubmission2(submissions, "Wes", 59, "2021-06-04");
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const editSubmission2 = (array, index, score) => {
  array[index]["score"] = score;
  array[index]["passed"] = score >= 60;
};

// editSubmission2(submissions, 1, 30);
// console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};

// console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array) => {
  let lowestCurrentScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestCurrentScore.score) {
      lowestCurrentScore = item;
    }
  });
  return lowestCurrentScore;
};

// console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};

// console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};

// console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    if (item.score >= 90) {
      return item;
    }
  });
};

const filter90AndAbove2 = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

// console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const createRange2 = (start, end) => {
  let range = [];
  let finalValue = end - start;
  for (let i = 0; i <= finalValue; i++) {
    range.push(start);
    start++;
  }
  return range;
};

const createRange3 = (start, end) => {
  let range = [];
  let counter = start;
  while (counter <= end) {
    range.push(counter);
    counter++;
  }
  return range;
};

// console.log(createRange3(2, 10));

const countElements = (arrayOfStrings) => {
  let elementCount = {};
  arrayOfStrings.forEach((item) => {
    if (elementCount[item] === undefined) {
      elementCount[item] = 1;
    } else {
      elementCount[item]++;
    }
  });
  return elementCount;
};

const countElements2 = (arrayOfStrings) => {
  let elementCount = {};
  arrayOfStrings.forEach((item) => {
    if (!elementCount[item]) {
      elementCount[item] = 1;
    } else {
      elementCount[item]++;
    }
  });
  return elementCount;
};

const countElements3 = (arrayOfStrings) => {
  let elementCount = {};
  arrayOfStrings.forEach((item) => {
    if (elementCount[item]) {
      elementCount[item]++;
    } else {
      elementCount[item] = 1;
    }
  });
  return elementCount;
};

console.log(countElements2(["w", "e", "s", "l", "e", "y"]));
