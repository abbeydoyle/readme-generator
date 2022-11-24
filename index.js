// TODO: Include packages needed for this application

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const process = require("process");


startAnswerValidator = async (startInput) => {
      if (startInput === 'n') {
            console.log("thank god")
      }
};
// TODO: Create an array of questions for user input
const questions = [
      {
            // FIXME: no answer
            type: 'confirm',
            name: 'start',
            message: 'Hi! Welcome to the ReadMe Generator. This was created by Abigail Doyle and will create a Professional ReadMe with user input. Would you like to continue?',
            default: true,
            validate: (startInput) => {
                  if (startInput === n) {
                        console.log("woo");
                  } else {
                        console.log("sad");
                  }
            }
            //startAnswerValidator(),
            // validate: startInput => {
            //       if (startInput !== true) {
            //             console.log('woo');
            //             exit();
            //             startNo();
            //             prompt.ui.close();

            //       } else {
            //             console.log("true");
            //       }
            // }
            // validate: startInput => {
            //       if (startInput === true ) {
            //             return true;
            //             startNo()
            //       } else {
            //             return false;
            //             // console.log('Thank you for visiting.');
            //             // prompt.ui.close();
            //             startNo()

                        
            //       }
            // }

      },

      {
            type: 'input',
            name: 'name',
            message: "Thank you for continuing, if at any point you would like to discontinue the process, simply press the 'escape' key. Please enter your name.",
            validate: nameInput => {
                  if (nameInput) {
                        return true;
                  } else {
                        console.log('Please enter your name');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username',
            validate: githubInput => {
                  if (githubInput) {
                        return true;
                  } else {
                        console.log('Please enter your github username');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                  if (emailInput) {
                        return true;
                  } else {
                        console.log('Please enter your email address');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'repo',
            message: 'What is the title of your project repository? Please use the exact capitalization and characters.',
            validate: repoInput => {
                  if (repoInput) {
                        return true;
                  } else {
                        console.log('Please write your repo name');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                  if (titleInput) {
                        return true;
                  } else {
                        console.log('Please write your project name');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'summary',
            message: 'Please write a 1-3 sentence summary about your project.',
            validate: summaryInput => {
                  if (summaryInput) {
                        return true;
                  } else {
                        console.log('Please write your summary');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project, including things such as: your motivation, challenges, successes, any tools utilized, and any lessons learned.',
            validate: descriptionInput => {
                  if (descriptionInput) {
                        return true;
                  } else {
                        console.log('Please write your description');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'installation',
            message: 'Please describe the steps required to install your project. Provide a step-by-step description of how to get the development environment running.',
            validate: installationInput => {
                  if (installationInput) {
                        return true;
                  } else {
                        console.log('Please describe the installation process');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'usage',
            message: 'Please describe the sections included in this repository.',
            validate: usageInput => {
                  if (usageInput) {
                        return true;
                  } else {
                        console.log('Please describe your repository');
                        return false;
                  }
            }

      },      

      {
            type: 'confirm',
            name: 'confirmContributions',
            message: "Would you like to add any contributing members to this project's ReadMe?",
            default: true,
            // FIXME: doesnt work
            validate: confirmContributions => {
                  if (confirmContributions !== 'y' || confirmContributions !== 'n') {
                        console.log('Please enter y or n')
                  }
                  return true;
            }


      },

      {
            type: 'input',
            name: 'contributions',
            message: 'Please write the names of any additional contributors to this project as well as any materials used as references',
            when: ({ confirmContributions }) => {
                  if (confirmContributions) {
                        return true;
                  } else {
                        return false;
                  }
            },

      },

      // TODO: consider making license a checkbox option

      {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to include a license?',
            default: true,
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to include?',
            choices: ['MIT', 'GPL', 'CC--0'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },

      {
            type: 'list',
            name: 'badges',
            message: 'What color would you like your badges to be?',
            choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey'],

      },

      {
            type: 'input',
            name: 'features',
            message: 'Please list the features of your project',
            validate: featuresInput => {
                  if (featuresInput) {
                        return true;
                  } else {
                        console.log('Please create a list of features');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'tests',
            message: 'Please write any tests you wish to include for your application. These will model any project features you wish to highlight',
            validate: testsInput => {
                  if (testsInput) {
                        return true;
                  } else {
                        console.log('Please create tests for your project');
                        return false;
                  }
            }

      },
      
];

// FIXME: check for .then promise act 19

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// FIXME: ensure this can create new file
const writeToFile = data => {
      // return new Promise((resolve, reject) => {
      fs.writeFile('readme.md', data, (err) => {
            err ? console.error(err) : console.log('File successfully written in a file entitled readme.md');
            })
      // })
}

// TODO: Create a function to initialize app

const init = () => {
      return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
      return generateMarkdown(userInput);
  })
  .then(readmeInfo => {
      return writeToFile(readmeInfo);
  })
  .catch(err => {
      console.log(err);
  })

//   Exit the inquirer prompt
function exit() {
      console.log('Thank you for visiting. Please come again!')
      prompt.ui.close();
    }
    
    // close inquirer input if user press "escape" key
process.stdin.on('keypress', (_, key) => {
      if (key.name === "escape") {
            // FIXME: how to make this look the same
            exit();
      }
    });
