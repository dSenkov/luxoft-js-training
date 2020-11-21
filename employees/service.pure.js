import {findById} from "./service";

export function removeEmployee(employees, id) {
    return employees.filter(e => e.id !== id)
}

export function setDateOfBirth(id, date) {
    const employee = findById(id)
    return {...employee, dateOfBirth: date}
}

export function setEmployeeManager(id, managerId) {
    const employee = findById(id)
    return {...employee, managerRef: managerId}
}