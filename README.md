
  
  # ReadME Generator


  A terminal-based interface that creates a project ReadME based on user input

  ![license badge](https://img.shields.io/badge/License-MIT-pink)



  ## Description

  This project uses npm, inquirer, fs, and javascript to generate a professional ReadME with user input. All input is given within the terminal using Inquirer, a command line interface for Node.js. This ReadME file is then written into the project repository with the Node File System module. This project introduced working in the command line with Node Package Manager (npm), using javascript to create functions, inquirer prompts, and a string that will populate the ReadME. 



  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Tests](#tests)


  ## Installation

  Applications required for use: Bash, VSCode, and Node.js <br> Initialization: <br> - Copy the SSH code within this Github Repo <br> - In the terminal, type “git clone {SSH Code}” <br> - In the terminal, use the command "npm init -y" to install Node Package Manager <br> - Use the command "npm install inquirer" to get npm's inquirer package <br> - Still in the terminal, type “node index.js” <br> - Simply follow the prompts to create your own ReadME <br> - Once complete, your file will be written into “readme.md”


  ## Usage

  There are 8 main sections of this repository: <br> - Node Modules Folder – node package modules, not tracked in Github due to .gitignore file <br> - [Notes Folder]( https://github.com/abbeydoyle/readme-generator/tree/main/notes) - Contains a graveyard.js file, which contains nonfunctional code to reference <br> - [Utils Folder]( https://github.com/abbeydoyle/readme-generator/tree/main/utils) - Contains the JSON package files and the Generate Markdown JS file <br> - [generateMarkdown.js]( https://github.com/abbeydoyle/readme-generator/blob/main/utils/generateMarkdown.js) - Contains the javascript enconding the ReadME string <br> - [index.js]( https://github.com/abbeydoyle/readme-generator/blob/main/index.js) - Contains the javascript enconding the inquirer prompts as well as the file writing function <br> - [License]( https://github.com/abbeydoyle/readme-generator/blob/main/LICENSE) - Contains the webpage license <br> - [.gitignore]( https://github.com/abbeydoyle/readme-generator/blob/main/.gitignore) - Contains files unnecessary for Git to track <br> - [ReadME]( https://github.com/abbeydoyle/readme-generator/blob/main/README.md) - This file containing an executive overview of the project, written using this ReadME Generator


  ## Credits

  This application was built using UW Trilogy Bootcamp class materials as references.


  ## Licenses

  This project is covered under the MIT license. To learn more about what this means, click the license button at the top.



  ## Badges

  ![badmath](https://img.shields.io/github/repo-size/abbeydoyle/readme-generator?color=pink&style=plastic)

  ![badmath](https://img.shields.io/github/issues-closed-raw/abbeydoyle/readme-generator?color=pink&style=plastic)

  ![badmath](https://img.shields.io/github/issues-raw/abbeydoyle/readme-generator?color=pink&style=plastic)

  ![badmath](https://img.shields.io/github/license/abbeydoyle/readme-generator?color=pink&style=plastic)

  ![badmath](https://img.shields.io/github/last-commit/abbeydoyle/readme-generator?color=pink&style=plastic)

  ![badmath](https://img.shields.io/maintenance/yes/2022?color=pink&style=plastic)


  ## Features

  This page features: 

   - Keypress function to end process when ‘esc’ is pressed <br> - Error messages if no input is given <br> - File written directly into user’s system <br> - Automatically generated badges with color input

  ## Tests

   - Press ‘esc’ at any time to end the process <br> - Choose various badge colors


  ## Questions

  This project was created by Abigail Doyle. For any further information regarding this project please direct all inquiries to abigaildoyle3@gmail.com or visit https://github.com/abbeydoyle.

