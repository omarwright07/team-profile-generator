const generateCards = function (employees) {
    var cards = [];
    employees.forEach(employee => {
        var roleInfo = ``;
        var roleIcon = "";
        // Manager        
        if (employee.role == 'Manager') {
            roleInfo = `<li><p>Office Number: ${employee.officeNumber}</p></li>`;
            roleIcon = "oi oi-clipboard";
        }
        // Engineer
        if (employee.role == 'Engineer') {
            roleInfo = `<li class="d-flex"><p>GitHub:</p><a href="https://github.com/${employee.gitHub}" target="_blank">${employee.gitHub}</a></li>`;
            roleIcon = "oi oi-monitor";
        }
        // Intern        
        if (employee.role == 'Intern') {
            roleInfo = `<li><p>School: ${employee.school}</p></li>`;
            roleIcon = "oi oi-book";
        }

        let card = `
        <div class="card shadow">
            <div class="card-header">
                <h1>${employee.name}</h1>                              
                <h2><span class="${roleIcon}"></span>${employee.role}</h2>
            </div>
            <div class="card-body align-middle">
                <ul>
                    <li>
                        <p>ID: ${employee.id}</p>
                    </li>
                    <li class="d-flex">
                        <p>Email:</p>
                        <a href="mailto:${employee.email}">${employee.email}</a>
                    </li>
                    ${roleInfo}
                </ul>
            </div>
        </div>
        `;
        cards = cards + card;
    });
    return cards;
};

const generateHTML = function (employeesData) {
    const manager = employeesData.filter(employeesData => employeesData.role === 'Manager');
    // console.log(manager);
    const engineers = employeesData.filter(employeesData => employeesData.role === 'Engineer');
    // console.log(engineers);
    const interns = employeesData.filter(employeesData => employeesData.role === 'Intern');
    // console.log(interns);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="style.css">
        
    <title>My Team</title>
    </head>
    <body>
        <header class="shadow">
            <h1 class="">My Team</h1>
        </header>
        <main class="d-flex flex-wrap justify-content-center">
        ${generateCards(manager)}
        ${generateCards(engineers)}
        ${generateCards(interns)}
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    </body>
    </html>
    `;
};

module.exports = generateHTML;