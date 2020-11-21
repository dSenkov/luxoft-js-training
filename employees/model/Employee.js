import {Person} from "./Person";

export class Employee extends Person {

    constructor(name, surname, department) {
        super(name, surname)
        this.department = department
    }

    static fromJSON(obj) {
        return Object.assign(new Employee(), obj)
    }

    bonus() {
        return new Promise(resolve => {
            setTimeout(
                () => resolve(Math.round(Math.random() * 1000)),
                1000
            )
        })
    }

    total() {
        return new Promise(resolve =>
            this.bonus().then(bonus =>
                resolve(bonus + this.salary)))
    }
}

export function jsonToEmployees(employeesJSON) {
    let employees = []
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e))
    }
    return employees
}