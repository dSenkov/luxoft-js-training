import axios from 'axios'

const employees = axios.create({
    baseURL: 'http://localhost:3333/employees'
})

employees.interceptors.response.use(
    response => response,
    errorResponseHandler
)

function errorResponseHandler(error) {
    if (error.response.data.message) {
        console.log('SERVER ERROR: ' + error.response.data.message)
    }
    if (error.message) {
        console.log('SERVER ERROR:' + error.message)
    } else {
        console.log('ERROR: ' + error)
    }
}

export async function getEmployees() {
    let res = await employees.get('')
    return res.data._embedded.employees
}

export async function getEmployee(id) {
    let employee = await employees.get('/id')
    console.log(employee)
    return employee
}

export async function findByExample(employee) {
    let res = await employees.post('findByExample', employee)
    return res.data
}

export async function addEmployee(name, surname, managerId = null) {
    let e = await employees.post('', {name, surname, managerId})
    return e.data
}

export async function setEmployeeManager(id, managerId) {
    await employees.post(id + '/managerId?id=' + managerId)
}

export async function removeEmployee(id) {
    let employee = await getEmployee(id)
    await employees.delete('', {data: employee})
}
