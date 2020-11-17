import {Person} from "./Person";

export class Employee extends Person {

    constructor(name, surname, department) {
        super(name, surname)
        this.department = department
    }

    static fromJSON(obj) {
        return Object.assign(new Employee(), obj)
    }
}

export function jsonToEmployees(employeesJSON) {
    let employees = []
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e))
    }
    return employees
}

