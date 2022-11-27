const fs = require('fs');
var licenseLink;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license) {
//     return '';
//   } else {
//     return '[![license badge](https://img.shields.io/badge/License-${license}-${badges})](licenseLink)'
//   }
// }

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return '[![license badge](https://img.shields.io/badge/License-${license}-${badges})](${renderLicenseLink(license)})'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'ISC') {
    return `https://opensource.org/licenses/ISC`
  }
  if (license === 'GPL_v2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  }
  if (license === 'Apache_2.0') {
    return `https://opensource.org/licenses/Apache-2.0` 
  }
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return ``;
    } else {
      return `## Licenses
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}


  ${data.summary}

  ${renderLicenseBadge(data.licenses)}



  ## Description

  ${data.description}



  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Tests](#tests)


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Credits

  ${data.contributions}


  ${renderLicenseSection(data.license)}



  ## Badges

  ![badmath](https://img.shields.io/github/repo-size/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/issues-closed-raw/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/issues-raw/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/license/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/maintenance/yes/2022?color=${data.badges}&style=plastic)


  ## Features

  ${data.features}

  ## Tests

  ${data.tests}


  ## Questions

  This project was created by ${data.name}. For any further information regarding this project please direct all inquiries to ${data.email} or visit https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
