import {runUI, addEmployeeUI, openTab, searchEmployeeUI, removeEmployeeUI} from './employees/ui-all'

import DATA from './employees/employees-json'
import {Person} from "./employees/model/Person";
import {Employee, jsonToEmployees} from './employees/model/Employee'

import './style.css'

window.addEmployeeUI = addEmployeeUI
window.removeEmployeeUI = removeEmployeeUI
window.openTab = openTab
window.searchEmployeeUI = searchEmployeeUI

window.Person = Person
window.Employee = Employee

window.allEmployees = function () {
    return jsonToEmployees(DATA.employees)
}

function render() {
    document.getElementById('employees').innerHTML = html
}

let employees = jsonToEmployees(DATA.employees)
for (let e of employees) {
    e.total()
        .then(total => html += `$(e.name} total: ${total} <br>`)
        .catch(bonus => html += `${e.name} bonus is too big (${bonus}!) <br>`)
        .then(render)
}


async function printBonus() {
    html += '<br>Async/await version:<br>'
    for (let e of employees) {
        let bonus = await e.bonus()
        html += `${e.name} bonus: ${bonus}
            total: ${e.salary + bonus}<br>`
        render()
    }
}

printBonus()

window.addEventListener('load', runUI)
render()