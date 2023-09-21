// Write your solution in this file!


const employee = {}

//non-destructive update
function updateEmployeeWithKeyAndValue(employees, key, value){
    const employee = { ...employees}

    employee[key] = value

    return employee
}
const updated = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam')
console.log(updated)

//destructive Update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam')
assert.deepEqual(employee, {name: 'Sam', streetAddress: '11 Broadway'}) 

//non-destructive delete
function deleteFromEmployeeByKey(employees, key){
    const employee = { ...employees}

    delete employee[key]

    return employee
}

//destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]

    return employee
}