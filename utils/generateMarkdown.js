// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license !== "None")
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // check if the license is anything except None // if license !== "None"
    // return the * License(link to section)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== None)
  return `##${data.LicenseSection}`
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Title
    // license badges if any

    // Description
      // description text
    
      // Table of Contents
        // *  [Installation](#Installation)
        // * Usage
        // * License --> conditional
       
        // * Contributing
        // * Author

      // Installation
        // install text

      // License --> only render if the user selected a license

  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.Licence)}
  ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contribution](#Contribution)
    * [Tests](#Tests)
    * [License](#License)

  ## Descritpion
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contribution

  ## Usage

  

  ## License

`;
}

module.exports = generateMarkdown;

// * - bullets
// [link Title](url)
// ```
// code snippet
// ```
// [!](url)
