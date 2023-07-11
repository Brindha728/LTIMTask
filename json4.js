const fs = require('fs');
const employee_details = require("./employee");

let employee = [{
	firstName : 'Raja',
	lastName : 'Kumar',
	age : 40,
	emp_id : 110
},
{
	firstName : 'Raj',
	lastName : 'Mohan',
	age : 30,
	emp_id : 111
}
]

employee_details.push(employee);

// Convert data to JSON format
const jsonData = JSON.stringify(employee_details);

// Write data to JSON file
fs.writeFile('employee.json', jsonData,  (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been written to employee.json');
});