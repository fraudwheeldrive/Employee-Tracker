
INSERT INTO department (name)
VALUES 
('Corporate'),
('IT'),
('Inside Sales'),
('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES 
('AVP' , 300.5 , 1 ),
('Manager' , 90.2 , 2 ),
('Team Lead' , 60.7 , 3),
('Associate' , 42.3 , 4 );

INSERT INTO employee (first_name, last_name, roles_id , manager_id)
VALUES 
('Dale' , 'Dog', 1 , 0),
('Andrew' , 'Core', 2, 1),
('Sam', 'Cat', 3 , 1),
('Pip', 'Kitty', 4 , 0);


