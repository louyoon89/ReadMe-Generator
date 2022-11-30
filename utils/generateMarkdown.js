// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Licensing
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [User Story](#Usage)
  * [Installation](#Installation)
  * [Test](#Test)
  * [Contributors](#Contributors)
  * [Questions](#Questions)
  
  ## User Story
  ${data.Usage}

  ## Installation
  \`\`\`
  ${data.Installation}
  \`\`\`

  ## Tests
  \`\`\`
  ${data.Test}
  \`\`\`

  ## Contributors
  ${data.Contributors}

  ## Questions
  Questions? More info available https://github.com/${data.Username}/${
    data.Title
  }
  Or Contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
