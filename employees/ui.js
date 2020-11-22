import {addEmployee, removeEmployee, searchEmployees, setEmployeeManager} from "./service"
import DATA from "./employees-json";
import {jsonToEmployees} from "./model/Employee";

const PLACEHOLDER = 'employeesPlaceholder'

function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = ''
}

function showEmployees(employeesJSON) {
    let employees = jsonToEmployees(employeesJSON)
    document.getElementById(PLACEHOLDER).innerHTML = showEmployeesView(DATA.employees, employees)
}

function showEmployeesView(allEmployees, employees) {
    let li_items = employees.map(e =>
        `<li>${e} 
            <button onclick="removeEmployeeUI(${e.id})">X</button>
            ${employeeManagerView(allEmployees, e.managerRef)}
         </li>`)
        .join('')
    return `<ul>${li_items}</ul>`
}

export function employeeManagerView(employees, selectedId) {
    if (!selectedId) return ''
    let values = employees.map(e => {
        return {
            text: e.name + ' ' + e.surname,
            value: e.id,
            selected: e.id === selectedId
        }
    })
    return ` <b>Manager:</b> <span>${selectView(values)}</span>`
}

export function selectView(values) {
    const values_html = values.map(v =>
        `<option value="${v.value}"${v.selected ? ' selected' : ''}>${v.text}</option>`
    ).join('')
    return `<select>${values_html}</select>`
}

// function showEmployees(employees) {
//     clearEmployeesPlaceholder()
//     const ul = document.createElement('ul')
//
//     for (let employee of jsonToEmployees(employees)) {
//         const li = document.createElement('li')
//         ul.appendChild(li)
//         li.innerHTML = employee
//         if (employee.managerRef) {
//             const managerSpan = document.createElement('span')
//             const managerSelect = document.createElement('select')
//             fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef)
//             managerSelect.addEventListener('change',
//                 () => employee.managerRef = managerSelect.value)
//             managerSpan.innerHTML = ' <b>Manager:</b> '
//             li.appendChild(managerSpan)
//             li.appendChild(managerSelect)
//         }
//         const removeButton = document.createElement('button')
//         removeButton.innerHTML = 'Remove'
//         removeButton.addEventListener('click', () => removeEmployeeUI(employee.id))
//         li.appendChild(removeButton)
//     }
//     document.getElementById(PLACEHOLDER).appendChild(ul)
// }

export function runUI() {
    showEmployees(DATA.employees)
    fillSelect(document.getElementById('managerSelect'), getEmployeesOptions())
    //fillSelect(document.getElementById('managerSearch'), getEmployeesOptions())
    assignSendOnEnter('searchPane', 'searchEmployeesButton')
    assignSendOnEnter('addPane', 'addEmployeeButton')
    document.getElementById('searchButton').click()
}

export function addEmployeeUI() {
    let errorHTML = ''
    const name = document.getElementById('name').value
    if (name === '') {
        errorHTML += '- Employee name should be set<br>'
        document.getElementById('name').style.backgroundColor = '#FFEEEE'
    }
    const surname = document.getElementById('surname').value
    if (surname === '') {
        errorHTML += '- Employee surname should be set<br>'
        document.getElementById('surname').style.backgroundColor = '#FFEEEE'
    }
    const dateOfBirth = document.getElementById('dateOfBirth').value
    if (dateOfBirth === '') {
        errorHTML += '- Employee date of birth should be set<br>'
        document.getElementById('dateOfBirth').style.backgroundColor = '#FFEEEE'
    }
    const id = addEmployee(name, surname)
    if (id != null) {
        const managerId = document.getElementById('managerSelect').value
        setEmployeeManager(id, managerId)
    }
    console.log('Error: ' + errorHTML)
    document.getElementById('addEmployeeFormErrorMessage').innerHTML = errorHTML

    if (errorHTML.length !== 0) return

    showEmployees(DATA.employees)

    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''
    document.getElementById('dateOfBirth').value = ''
}

export function removeEmployeeUI(id) {
    removeEmployee(id)
    showEmployees(DATA.employees)
}

function fillSelect(select, values, selectedValue) {
    for (let val of values) {
        const option = document.createElement('option')
        option.text = val.text
        option.value = val.value
        if (selectedValue === option.value) option.selected = true
        select.appendChild(option)
    }
}

function getEmployeesOptions() {
    let options = []
    for (let e of DATA.employees) {
        options.push({text: e.name + ' ' + e.surname, value: e.id})
    }
    return options
}

export function searchEmployeeUI() {
    const name = document.getElementById('nameSearch').value
    const surname = document.getElementById('surnameSearch').value
    const managerRef = document.getElementById('managerSearch').value

    const employees = searchEmployees(name, surname, managerRef)
    showEmployees(employees)
}

export function openTab(event, id) {
    var i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }

    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
    }

    document.getElementById(id).style.display = 'block'

    event.currentTarget.className += 'active'
}

function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll('#' + paneId + ' input')
    for (let input of allInput) {
        input.addEventListener('keyup', function (event) {
            event.preventDefault()
            if (event.keyCode === 13) {
                document.querySelector('#' + paneId + ' button').click()
            }
        })
    }
}