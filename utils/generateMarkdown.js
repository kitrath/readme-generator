// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {return '';}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { return ''; }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions);

### [Installation](#installation)
<a name="installation"></a>
${data.installation}

### [Usage](#usage)
<a name="usage"></a>
${data.usage}

### [License](#license)
<a name="license"></a>
${renderLicenseSection(data.license)}

### [Contributing](#contributing)
<a name="contributing"></a>
${data.contributing}

### [Tests](#tests)
<a name="tests"></a>
${data.tests}

### [Questions](#questions)
<a name="questions"></a>
${data.questions}


`;
}

module.exports = generateMarkdown;
