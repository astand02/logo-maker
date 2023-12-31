const { Circle, Triangle, Square } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return inquirer.prompt([
  {
    type: "input",
    message: "Input 3 alphabetical characters for your logo.",
    name: "text",
  },
  {
    type: "list",
    message: "What color would you like the text?",
    name: "textColor",
    choices: ["White", "Black", "Gray"],
  },
  {
    type: "list",
    message: "What shape would you like your logo?",
    name: "shape",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "list",
    message: "What color would you like your shape to be?",
    name: "shapeColor",
    choices: ["Red", "Blue", "Yellow"],
  },
])};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if(error){
      return console.log(error);
    } else {
      return console.log("Successfully created Logo!")
    }
  });
}

function init() {
  return questions ()
  .then((answers) => {
    console.log(answers.text)
    let shape;
    if(answers.shape === 'Circle'){
      shape = new Circle()
    }if(answers.shape === 'Triangle'){
      shape = new Triangle()
    }if(answers.shape === 'Square'){
      shape = new Square()
    }
    shape.shapeColor = answers.shapeColor
    shape.text = answers.text
    shape.textColor = answers.textColor
    return writeToFile('logo.svg', shape.render());
  });dex


  // .then((data) => {
  //   return writeToFile('logo.svg',data);
  // })
  .catch((error) => {
    console.log(error);
  })
};

init();
