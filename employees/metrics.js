let DATA = {
    employees: [
        {
            id: 1,
            name: 'Peter',
            surname: 'Peterson 1',
            department: 'IT',
            salary: 2000,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 2,
            name: 'Peter',
            surname: 'Peterson 2',
            department: 'IT',
            salary: 3000,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 3,
            name: 'Peter',
            surname: 'Peterson 3',
            department: 'IT',
            salary: 4000,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 4,
            name: 'Steve',
            surname: 'Jobs 1',
            department: 'Hardware',
            salary: 500,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 5,
            name: 'Steve',
            surname: 'Jobs 2',
            department: 'Hardware',
            salary: 600,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 6,
            name: 'Jeff',
            surname: 'Bezos 1',
            department: 'Sales',
            salary: 10,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 7,
            name: 'Jeff',
            surname: 'Bezos 2',
            department: 'Sales',
            salary: 20,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 8,
            name: 'Jeff',
            surname: 'Bezos 3',
            department: 'Sales',
            salary: 30,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 9,
            name: 'Jeff',
            surname: 'Bezos 4',
            department: 'Sales',
            salary: 40,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 10,
            name: 'Jeff',
            surname: 'Bezos 5',
            department: 'Sales',
            salary: 50,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 11,
            name: 'Bill',
            surname: 'Gates 1',
            department: 'Finances',
            salary: 100,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 12,
            name: 'Bill',
            surname: 'Gates 2',
            department: 'Finances',
            salary: 200,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 13,
            name: 'Bill',
            surname: 'Gates 3',
            department: 'Finances',
            salary: 300,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 14,
            name: 'Bill',
            surname: 'Gates 4',
            department: 'Finances',
            salary: 400,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 15,
            name: 'Bill',
            surname: 'Gates 5',
            department: 'Finances',
            salary: 500,
            dateOfBirth: "2000-01-01"
        },
        {
            id: 16,
            name: 'Bill',
            surname: 'Gates 6',
            department: 'Finances',
            salary: 600,
            dateOfBirth: "2000-01-01"
        }
    ]
}

function amountInDep(dep) {
    return DATA.employees
        .map(employee => employee.department)
        .filter(department => department === dep)
        .length
}

function sumSalaryInDep(dep) {
    return DATA.employees
        .filter(employee => employee.department === dep)
        .map(employee => employee.salary)
        .reduce((a, b) => a + b)
}

let avgSalaryInDep = dep => sumSalaryInDep(dep) / amountInDep(dep)

function maxSalaryInDep(dep) {
    return DATA.employees
        .filter(employee => employee.department === dep)
        .map(employee => employee.salary)
        .reduce((a, b) => a > b ? a : b)
}

function uniqueDeps() {
    return Array.from(new Set(DATA.employees
        .map(employee => employee.department)))
}

function depWithMaxSalary() {
    return uniqueDeps()
        .map(department => {
            return {
                departmentName: department,
                averageSalary: avgSalaryInDep(department)
            }
        })
        .reduce((dep1, dep2) =>
            dep1.averageSalary > dep2.averageSalary ? dep1 : dep2)
        .departmentName
}

function employeesInDep(dep) {
    return DATA.employees
        .filter(employee => employee.department === dep)
        .map(employee => ' ' + employee.name + ' ' + employee.surname)
}

function employeesWithSalaryMoreThan(salary) {
    return DATA.employees
        .filter(employee => employee.salary > salary)
        .map(employee => ' ' + employee.name + ' ' + employee.surname)
}

console.log()
console.log('Amount of employees in IT department: ' + amountInDep('IT'))
console.log('Sum of salaries in IT department: ' + sumSalaryInDep('IT'))
console.log('Average salary in IT department: ' + avgSalaryInDep('IT'))
console.log('Highest salary in IT department: ' + maxSalaryInDep('IT'))
console.log('Department with highest average salary: ' + depWithMaxSalary())
console.log('Employees it IT department:' + employeesInDep('IT'))
console.log('Employees with salary more than 500:' + employeesWithSalaryMoreThan(500))

