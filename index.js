// Write your solution in this file!

const employee = 
{
    name: "Bob",
    streetAddress: "123 Fake Street"

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}

    newEmployee[key] = value;

    return newEmployee
}




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value

    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "cool", "very")

function deleteFromEmployeeByKey(employee, key) {
    const delEmployee = {...employee}

    delete delEmployee.name

    return delEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name

    return employee
}