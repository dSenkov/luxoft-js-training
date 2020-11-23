import DATA from './employees-json'

function findByName(name, surname) {
    let res = []
    for (let e of DATA.employees) {
        if ((!name || e.name === name) &&
            (!surname || e.surname === surname)) {
            res.push(e)
        }
    }
    return res
}

export function findById(id) {
    return DATA.employees.find(employee => employee.id === id)
}

function getEmployeeJSON(id) {
    return JSON.stringify(findById(id))
}

export function getEmployees() {
    return DATA.employees
}

function testEmployee() {
    addPhone(1, '555-55-55')
    addPhone(1, '666-66-66')
    setDateOfBirth(1, new Date(2000, 1, 1))
    const info = getEmployeeInfo(1)
    console.log(info)
}

export function addEmployee(name, surname) {
    if (!name || name.length === 0 || !surname || surname.length === 0) {
        // throw new Error('name and surname should not be empty')
        return null
    }
    let id = DATA.employees
        .map(employee => employee.id)
        .reduce((id1, id2) => id1 > id2 ? id1 : id2) + 1
    DATA.employees.push({id, name, surname})
    return id
}

function addPhone(id, phone) {
    const employee = findById(id)
    const phones = employee.phones
    if (!phones) {
        employee.phones = []
    }
    employee.phones.push(phone)
}

function setDateOfBirth(id, date) {
    const employee = findById(id)
    employee.dateOfBirth = date
}

export function removeEmployee(id) {
    let index = 0
    for (let e of DATA.employees) {
        if (e.id === id) break
        index++
    }
    DATA.employees.splice(index, 1)
}

function showEmployee(employee) {
    const keys = Object.keys(employee)
    console.log('Employee info ' + employee['name'] + ':')
    for (let key of keys) {
        console.log(key + ' = ' + employee[key])
    }
}

function showEmployees() {
    DATA.employees.forEach(showEmployee)
}

export function setEmployeeManager(id, managerId) {
    const employee = findById(id)
    employee.managerRef = managerId
    return employee
}

export function searchEmployees(name, surname, managerRef) {
    let results = []
    for (let e of DATA.employees) {
        if ((!name || e.name === name) &&
            (!surname || e.surname === surname) &&
            (!managerRef || e.managerRef === managerRef)) {
            results.push(e)
        }
    }
    return results
}