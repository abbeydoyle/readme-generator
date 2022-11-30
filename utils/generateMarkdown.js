const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {

  
  return `
  
  # ${data.title}


  ${data.summary}

  ![license badge](https://img.shields.io/badge/License-${data.license}-${data.badges})]



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


  ## Licenses

  This project is covered under the ${data.license} license. To learn more about what this means, click the license button at the top.



  ## Badges

  ![badmath](https://img.shields.io/github/repo-size/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/issues-closed-raw/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/issues-raw/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/license/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?color=${data.badges}&style=plastic)

  ![badmath](https://img.shields.io/maintenance/yes/2022?color=${data.badges}&style=plastic)


  ## Features

  This page features: 

  ${data.features}

  ## Tests

  ${data.tests}


  ## Questions

  This project was created by ${data.name}. For any further information regarding this project please direct all inquiries to ${data.email} or visit https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
