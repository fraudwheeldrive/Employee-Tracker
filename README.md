# Employee-Tracker
A Content Management System that utilizes Control Line Input to manage a companies employees. 

# User Story 
AS A business owner
`I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business`


# Acceptance Criteria 
`GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database `

## Github User Name
Fraudwheeldrive

## Installation
please ensure you have the required NPM modules and MySQL installed installed locally 
clone this repo and install npm modules using following commands. 
`npm i console.table express inquire mysql`

navigate to the root directroy in your terminal and launch the app using 
`node index`

at this point you have launched the application, please follow the promp instructions 
to cycle through and use the application 

## demonstration

This is how the command line application looks

![alt text](https://github.com/fraudwheeldrive/Readme-Generator/blob/main/assets/images/screenshot.PNG)

Please refer to video below to see it in action

https://drive.google.com/file/d/1l7wLR-VZkASij8cq00NCpbR4q4MmDWfv/view?usp=sharing


## Contributing
 ensure a pull request made before merging 


## Credits
This app was built with:
Javascript 
node.js 
Inquirer 
mysql 


with reference from Mozilla Developer Network, NPM and Node documentation and w3 schools.
https://dev.mysql.com/doc/refman/8.0/en/
https://www.w3schools.com/sql/sql_join.asp
https://www.w3schools.com/js/js_switch.asp
https://www.npmjs.com/package/inquirer

## License
MIT