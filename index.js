
//required dependancies 
const inquirer = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');
//const mysql = require('mysql');


// import db 

const db = require('./db/connection');

//inquirer

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

    switch(answers.startTracker){

        case "view all departments":
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

//display all departments 





promptUser()