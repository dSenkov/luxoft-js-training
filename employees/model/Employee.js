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
        let bonus = Math.round(Math.random() * 1000)
        return new Promise((resolve, reject) =>
            setTimeout(() => bonus < 700 ? resolve(bonus) : reject(bonus), 1000))
    }

    async total() {
        await this.bonus()
            .then(bonus => resolve(bonus + this.salary))
    }
}

export function jsonToEmployees(employeesJSON) {
    let employees = []
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e))
    }
    return employees
}