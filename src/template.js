function generateCard(employeeInfo) {
  let employeesHtml = "";
  for (let i = 0; i < employeeArr.length; i++) {
    const htmlGeneratedName = `<div class = "top"><h2>${employeeInfo[
      i
    ].getName()}</h2> </div>`;
    employeesHtml += htmlGeneratedName;

    const htmlGeneratedRole = `<div><h3>Role: ${employeeInfo[
      i
    ].getRole()}</h3></div>`;
    employeesHtml += htmlGeneratedRole;

    const htmlGeneratedId = `<div><p>Employee Id: ${employeeInfo[
      i
    ].getId()}</p></div>`;
    employeesHtml += htmlGeneratedId;

    const htmlGeneratedEmail = `<div><a href="mailto:${employeeInfo[
      i
    ].getEmail()}">Email: ${employeeInfo[i].email}</a></div>`;
    employeesHtml += htmlGeneratedEmail;

    if (employeeInfo[i].officeNumber !== undefined) {
      const htmlGeneratedOfficeNum = `<div class = "bottom"><p>Office #: ${employeeInfo[i].officeNumber}</p> </div>`;
      employeesHtml += htmlGeneratedOfficeNum;
    } else if (employeeInfo[i].github !== undefined) {
      const htmlGeneratedGithub = `<div class = "bottom"><a href = "https://github.com/${employeeInfo[
        i
      ].getGithub()}" target = "_blank" rel="noopener noreferrer">GitHub profile: ${employeeInfo[
        i
      ].getGithub()}</a> </div>`;
      employeesHtml += htmlGeneratedGithub;
    } else if (employeeInfo[i].school !== undefined) {
      const htmlGeneratedSchool = `<div class = "bottom"><p>School: ${employeeInfo[
        i
      ].getSchool()}</p></div>`;
      employeesHtml += htmlGeneratedSchool;
    }
  }
  return employeesHtml;
}

function generateHtml(employeeInfo) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>
        <div>
    ${generateCard(employeeInfo)}
        </div>
    </body>
    </html>`;
}

module.exports = { generateCard, generateHtml };
