
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

db.connect(function(err){
    if (err) throw err;
    promptUser();
})

// start inquirer 

 function promptUser() {
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


// //display all departments  

// SELECT * from department;
function allDep(){
    const sql = `SELECT * from department`;
    db.query(query, function(err, res){
        if (err) throw err;
        console.table('employee', res);
        promptUser();
    })
};
    
   

//"view all roles", 

// SELECT * from ROLES;

//"view all employees", 
// THEN I am presented with a formatted table showing employee data, 
// including employee ids, 
// first names, last names, 
// job titles, departments, salaries, and 
// managers that the employees report to
// SELECT employee.ID, employee.first_name, employee.last_name, roles.title, roles.salary, roles.department_id
//from employee
//
// SELECT * FROM employee
// LEFT JOIN roles ON employee.roles_id = roles.id;


//"add a department",
// INSERT INTO department (name)
// Values('');

//"add a role",
// INSERT INTO roles (title, salary, department_id)
// VALUES 
// ('' ,  ,  ),

//"add an employee",
// INSERT INTO employee (first_name, last_name, roles_id , manager_id)
// VALUES 
// ('' , '',  , ),

// //"update an employee role"
// update employee
//     -> set roles_id =  
//     -> where ID = ;