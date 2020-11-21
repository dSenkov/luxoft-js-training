import {removeEmployee, setDateOfBirth, setEmployeeManager} from "./service.pure";
import DATA from './employees-json'
import {findById} from "./service";

const employees = DATA.employees

const employeesRemoved135 = [
    {
        id: 1,
        name: 'Peter',
        surname: 'Peterson',
        department: 'IT',
        salary: 4000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 3,
        name: 'Jeff',
        surname: 'Bezos',
        department: 'Sales',
        salary: 3000,
        dateOfBirth: "2000-01-01"
    },
    {
        id: 4,
        name: 'Bill',
        surname: 'Gates',
        department: 'Finances',
        salary: 3000,
        dateOfBirth: "2000-01-01"
    }
]

const employeeWithId3Original = {
    id: 3,
    name: 'Jeff',
    surname: 'Bezos',
    department: 'Sales',
    salary: 3000,
    dateOfBirth: "2000-01-01"
}

const employeeWithId3DateOfBirthChanged = {
    id: 3,
    name: 'Jeff',
    surname: 'Bezos',
    department: 'Sales',
    salary: 3000,
    dateOfBirth: "1998-09-29"
}

const employeeWithId3ManagerChanged = {
    id: 3,
    name: 'Jeff',
    surname: 'Bezos',
    department: 'Sales',
    salary: 3000,
    dateOfBirth: "2000-01-01",
    managerRef: 4
}

test('removeEmployee', () =>
    expect(removeEmployee(employees, 135))
        .toEqual(employeesRemoved135))

test('setDateOfBirth', () =>
        expect(setDateOfBirth(3, '1998-09-29'))
            .toEqual(employeeWithId3DateOfBirthChanged),
    originalRemainsTheSame())

test('setEmployeeManager', () =>
        expect(setEmployeeManager(3, 4))
            .toEqual(employeeWithId3ManagerChanged),
    originalRemainsTheSame())

function originalRemainsTheSame() {
    expect(findById(3)).toEqual(employeeWithId3Original)
}