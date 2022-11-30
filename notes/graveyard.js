// // const process = require("process");

//             // FIXME: no answer
//             type: 'confirm',
//             name: 'start',
//             message: 'Hi! Welcome to the ReadMe Generator. This was created by Abigail Doyle and will create a Professional ReadMe with user input. Would you like to continue?',
//             default: true,
//             validate: (startInput) => {
//                   if (startInput === n) {
//                         console.log("woo");
//                   } else {
//                         console.log("sad");
//                   }
//             }
//             //startAnswerValidator(),
//             // validate: startInput => {
//             //       if (startInput !== true) {
//             //             console.log('woo');
//             //             exit();
//             //             startNo();
//             //             prompt.ui.close();

//             //       } else {
//             //             console.log("true");
//             //       }
//             // }
//             // validate: startInput => {
//             //       if (startInput === true ) {
//             //             return true;
//             //             startNo()
//             //       } else {
//             //             return false;
//             //             // console.log('Thank you for visiting.');
//             //             // prompt.ui.close();
//             //             startNo()

                        
//             //       }
//             // }

//       },

//       Hi! Welcome to the ReadMe Generator. This was created by Abigail Doyle and will create a Professional ReadMe with user input. If at any point you would like to discontinue the process, simply press the 'escape' key. Please enter your name.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license) {
//     return '';
//   } else {
//     return '[![license badge](https://img.shields.io/badge/License-${license}-${badges})](licenseLink)'
//   }
// }

// function renderLicenseBadge(license) {
//       if (!license) {
//         return '';
//       } else {
//         return '[![license badge](https://img.shields.io/badge/License-${license}-${badges})](${renderLicenseLink(license)})'
//       }
//     }



//     {
//       type: 'confirm',
//       name: 'confirmContributions',
//       message: "Would you like to add any contributing members to this project's ReadMe?",
//       default: true,
//       // FIXME: doesnt work
//       validate: confirmContributions => {
//             if (confirmContributions !== 'y' || confirmContributions !== 'n') {
//                   console.log('Please enter y or n')
//             }
//             return true;
//       }

// },

// {
//       type: 'input',
//       name: 'contributions',
//       message: 'Please write the names of any additional contributors to this project as well as any materials used as references',
//       when: ({ confirmContributions }) => {
//             if (confirmContributions) {
//                   return true;
//             } else {
//                   return false;
//             }
//       },

// },



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   console.log(license)

//   if (license == 'MIT') {
//     return 'https://opensource.org/licenses/MIT'
//   }

//   if (license == 'GPLv3') {
//     return `https://www.gnu.org/licenses/gpl-3.0`
//   }

//   if (license == 'ISC') {
//     return `https://opensource.org/licenses/ISC`
//   }

//   if (license == 'GPL_v2') {
//     return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
//   }

//   if (license == 'Apache_2.0') {
//     return `https://opensource.org/licenses/Apache-2.0`
//   }

//   if (!license) {
//     return '';
//   }
// }

    