import {employeeManagerView} from "./ui";
import DATA from './employees-json'

String.prototype.trimAll = function () {
    return this.replace(/>\s+</g, '><').replace(/\s\s+/g, '').trim()
}

String.prototype.removeTags = function () {
    return this.replace(/<[^>]+>/g, '').trimAll()
}

test('employeeManagerView', () =>
    expect(employeeManagerView(DATA.employees, 135).trimAll()).toEqual(`
        <span>
            <select>
                <option value="1">Peter Peterson</option>
                <option value="135" selected>Steve Jobs</option>
                <option value="3">Jeff Bezos</option>
                <option value="4">Bill Gates</option>
            </select>
        </span>
    `.trimAll())
)

test('employeeManagerView Text', () =>
    expect(employeeManagerView(DATA.employees, 135).removeTags())
        .toEqual('Peter PetersonSteve JobsJeff BezosBill Gates')
)