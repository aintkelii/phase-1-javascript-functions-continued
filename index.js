// Function 1: saturdayFun (function declaration)
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function 2: mondayWork (function expression)
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function 3: wrapAdjective
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Export the functions if needed (for Node.js environments)
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
};
// Test saturdayFun
console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bike")); // Output: "This Saturday, I want to bike!"

// Test mondayWork
console.log(mondayWork()); // Output: "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."

// Test wrapAdjective
const starWrapper = wrapAdjective("*");
console.log(starWrapper("a dedicated programmer")); // Output: "You are *a dedicated programmer*!"
console.log(starWrapper()); // Output: "You are *special*!"

const hashWrapper = wrapAdjective("#");
console.log(hashWrapper("awesome")); // Output: "You are #awesome#!"
