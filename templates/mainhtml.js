function buildpage(team, engineergroup,  interngroup) {
return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>YOUR TEAM</title>
    </head>
    
    <body>
        <div class="container">
        <div class="row">
                <div class="col-xs-12">
                <h1>YOUR TEAM:</h1>
            </div>
            </div>
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        Manager: ${team[0].name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[0].id}</li>
                        <li class="list-group-item">Email: ${team[0].email}</li>
                        <li class="list-group-item">Role: ${team[0].role}</li>
                        <li class="list-group-item">Office: ${team[0].office}</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container">
        <div class="row">
                        <div class="col-xs-12">
                        <h2>Engineers:</h2>
                    </div>
                    </div>
            <div class="row" id="engineerrow">
            ${engineergroup}
            </div>
        </div>


        <div class="container">
        <div class="row">
                        <div class="col-xs-12">
                        <h2>Interns:</h2>
                    </div>
                    </div>
            <div class="row" id="internrow">
            ${interngroup}
            </div>
        </div>


        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    </body>
    </html>`;
}
module.exports = buildpage;