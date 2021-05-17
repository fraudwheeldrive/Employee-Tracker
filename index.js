
//required dependancies 
const inquirer = require('inquirer');
const mysql = require('mysql');
const CTable = require('console.table');


//const db = require('./db/connection')

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Raptor10!',
        database: 'employee_tracker'
    },
    console.log('connected to the Employee Tracker database.')

);

const promptUser= () => {
    console.log(`
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    *******EMPLOYEE TRACKER*******
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);

    return inquirer.prompt([
        { 
            type: "list",
            name: "startTracker",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role"
            ]
        }
    ])

 // need to set up what to do with the selected answer 
 
.then(promptAnswer => {

    switch(promptAnswer.startTracker){

        case "view all departments":no
            allDep();
            break;

        case "view all roles":
            allRoles();
            break;
            
        case "view all employees":
            allEmp();
            break;
        
        case "add a department":
            addDep();
            break;   

        case "add a role":
             addRoll();
             break;
             
        case "add an employee":
             addEmp();
             break;
        
        case  "update an employee role":
             empUpdate();
             break;    

        default:
            console.log= ("program has quit");
            process.exit();     
       };
    });
};

promptUser()

// //display all departments 
function allDep(){
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    })
  }
   



//"view all roles",

//"view all employees",
//"add a department",
//"add a role",
//"add an employee",
//"update an employee role"
