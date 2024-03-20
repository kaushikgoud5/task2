import { handleFilterReset } from './handleReset.js'
import { LoadEmployeePage } from './loadEmp.js';
import { hideNavBar } from './hideNav.js';
import { displayAlphabets } from './displayAlpha.js';
import { handleStat, handleDpt, handleLoc } from './handleFilter.js'
import { handleFilterApply } from './filterApply.js'
import { sorting } from './handleSorting.js';
import { tableToCSV } from './exportToCsv.js';
import { disableDropDowns } from './disable.js';
import { handleAddEmployee } from './addEditEmployee.js';
import { handleDelete } from './handleDelete.js';
import { handleCheckBox } from './inpCheckbox.js';
import { handleSearchBox } from './handleSearchBox.js'
document.addEventListener('DOMContentLoaded', () => {
    LoadEmployeePage();
});
document.getElementById("close-btn").addEventListener('click', () => {
    console.log('hi')
    hideNavBar();
})
displayAlphabets();
document.getElementById("filter-status").addEventListener("click", () => {
    handleStat();
})
document.getElementById("filter-department").addEventListener("click", () => {
    handleDpt();
})
document.getElementById("filter-location").addEventListener("click", () => {
    handleLoc();
})
document.getElementById("btn-filter-apply").addEventListener("click", () => {
    handleFilterApply();
})
document.getElementById('sort-btn-user').addEventListener("click", () => {
    sorting(1)
})
document.getElementById('sort-btn-loc').addEventListener("click", () => {
    sorting(2)
})
document.getElementById('sort-btn-dep').addEventListener("click", () => {
    sorting(3)
})
document.getElementById('sort-btn-role').addEventListener("click", () => {
    sorting(4)
})
document.getElementById('sort-btn-emp').addEventListener("click", () => {
    sorting(5)
})
document.getElementById('sort-btn-status').addEventListener("click", () => {
    sorting(6)
})
document.getElementById('sort-btn-join-date').addEventListener("click", () => {
    sorting(7)
})
document.getElementById("btn-export-to-csv").addEventListener("click", () => {
    tableToCSV()
})
document.getElementById("btn-reset-filter").addEventListener("click", () => {
    handleFilterReset();
})
document.getElementById("body").addEventListener("click", () => {
    disableDropDowns()
});

document.getElementById("btn-add-emp").addEventListener("click", () => {
    handleAddEmployee();
})

document.getElementById("btn-delete-active").addEventListener("click", () => {
    handleDelete();
})
document.getElementById("inp-check-box").addEventListener("click", (event) => {
    handleCheckBox(event.target);
})

document.getElementById("search-input").addEventListener('keyup', () => {
    handleSearchBox();
})