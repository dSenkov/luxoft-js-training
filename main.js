import {runUI, addEmployeeUI, openTab, searchEmployeeUI} from './employees/ui-all'

import DATA from './employees/employees-json'
import {Person} from "./employees/model/Person";
import {Employee, jsonToEmployees} from './employees/model/Employee'

import './style.css'

window.addEmployeeUI = addEmployeeUI
window.openTab = openTab
window.searchEmployeeUI = searchEmployeeUI

window.Person = Person
window.Employee = Employee

window.allEmployees = function () {
    return jsonToEmployees(DATA.employees)
}

window.addEventListener('load', runUI)