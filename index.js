// TODO: Include packages needed for this application

const fs = require("fs");
//const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
//const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
      {
            type: 'checkbox',
            name: 'start',
            message: 'Hi! Welcome to the ReadMe Generator. This was created by Abigail Doyle and will create a Professional ReadMe with user input. Would you like to continue?',
            choices: ['Yes', 'No'],
            validate: startInput => {
                  if (startInput) {
                        return true;
                  } else {
                        console.log('Please make your selection to coninue');
                        return false;
                  }
            }

      },

      {
            type: 'input',
            name: 'name',
            message: 'Thank you for continuing. Please enter your name.',
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
            name: 'summary',
            message: 'Please write a 1-3 sentence summary about your project',
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
            message: 'Please write a description of your project, including things such as: your motivation, challenges, successes, any tools utilized, and any lessons learned',
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
            type: 'confirm',
            name: 'confirmContributions',
            message: "Would you like to add any contributing members to this project's ReadMe?",
            default: true,

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
            // validate: contributionsInput => {
            //       if (contributionsInput) {
            //             return true;
            //       } else {
            //             console.log('Please give credit to anyone who made contributions to this project');
            //             return false;
            //       }
            // }

      },

      // TODO: consider making license a checkbox option

      {
            type: 'input',
            name: 'license',
            message: 'Please write the license for you project',
            validate: licenseInput => {
                  if (licenseInput) {
                        return true;
                  } else {
                        console.log('Please write the license chosen for this project');
                        return false;
                  }
            }

      },

      // {
      //       type: 'input',
      //       name: 'badges',
      //       message: '',
      //       validate: badgesInput => {
      //             if (badgesInput) {
      //                   return true;
      //             } else {
      //                   console.log('');
      //                   return false;
      //             }
      //       }

      // },

      // TODO: add confirm options

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

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
