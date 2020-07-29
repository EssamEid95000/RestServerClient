const express = require('express');
const app = express();

const employees = [
  { id: 1, firstName: 'Essam',  lastName: 'Eid'},
  { id: 2, firstName: 'Hossam', lastName: 'Ibrahim'},
  { id: 2, firstName: 'Ahmed', lastName: 'Kamal'}

]

app.get('/',  (req, res) => {
  res.send('Hello World');
});

app.get('/api/employees', (req, res) => {
  res.send(employees);
});

app.get('/api/employees/:firstName', (req, res) => {
  const employee = employees.find(emp => emp.firstName === req.params.firstName);
  if(!employee) res.status(404).send('the employee is not found');
  res.send(employee);
});

app.listen(3000, () => console.log('Listening on port 3000') );
