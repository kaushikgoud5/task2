/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/addEditEmployee.js":
/*!*******************************!*\
  !*** ./JS/addEditEmployee.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddEmployee: () => (/* binding */ handleAddEmployee)\n/* harmony export */ });\nconst handleAddEmployee = () => {\n  localStorage.removeItem(\"updateEmp\");\n  window.location.href = \"./addEmp.html\";\n};\n\n//# sourceURL=webpack:///./JS/addEditEmployee.js?");

/***/ }),

/***/ "./JS/disable.js":
/*!***********************!*\
  !*** ./JS/disable.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableDropDowns: () => (/* binding */ disableDropDowns)\n/* harmony export */ });\nlet locationOptions = document.getElementById(\"options-body-loc\").classList;\nlet departmentOptions = document.getElementById(\"options-body\").classList;\nlet statusOptions = document.getElementById(\"options-body-status\").classList;\nfunction disableDropDowns() {\n  if (!locationOptions.contains(\"d-none\")) {\n    locationOptions.toggle(\"d-none\");\n  }\n  if (!departmentOptions.contains(\"d-none\")) {\n    departmentOptions.toggle(\"d-none\");\n  }\n  if (!statusOptions.contains(\"d-none\")) {\n    statusOptions.toggle(\"d-none\");\n  }\n  const ellipsisArray = document.getElementsByClassName(\"ellipsis\");\n  for (let i = 0; i < ellipsisArray.length; i++) {\n    if (!ellipsisArray[i].classList.contains(\"d-none\")) {\n      ellipsisArray[i].classList.toggle(\"d-none\");\n    }\n  }\n}\n\n//# sourceURL=webpack:///./JS/disable.js?");

/***/ }),

/***/ "./JS/displayAlpha.js":
/*!****************************!*\
  !*** ./JS/displayAlpha.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAlphabets: () => (/* binding */ displayAlphabets)\n/* harmony export */ });\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n\n\nfunction displayAlphabets() {\n  let alpha = \"\";\n  for (let i = 65; i < 91; i++) {\n    alpha += `<span id=${i}  class=\"activate-icon letter\">${String.fromCharCode(i)}</span>`;\n  }\n  document.getElementById(\"demo\").innerHTML = alpha;\n  addEventListenersforAlphabets();\n}\nfunction addEventListenersforAlphabets() {\n  document.querySelectorAll(\".letter\").forEach(letter => {\n    letter.addEventListener('click', e => {\n      handleClickFilter(e.target.innerText, _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.dataEmployess);\n    });\n  });\n}\nlet alphabetsFiltered = [];\nfunction handleClickFilter(letter) {\n  let ascciiValue = letter.charCodeAt(0);\n  const char = document.getElementById(ascciiValue).innerText;\n  const charClassList = document.getElementById(ascciiValue).classList;\n  if (charClassList.contains(\"active\")) {\n    charClassList.remove(\"active\");\n    let filterdArr = alphabetsFiltered.filter(i => i.user.toUpperCase().startsWith(char));\n    for (let i = 0; i < alphabetsFiltered.length; i++) {\n      for (let j = 0; j < filterdArr.length; j++) {\n        if (alphabetsFiltered[i].user == filterdArr[j].user) {\n          alphabetsFiltered.splice(i, 1);\n        }\n      }\n    }\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_0__.displayTable)(alphabetsFiltered.length == 0 ? _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.dataEmployess : alphabetsFiltered);\n  } else {\n    let isFound = false;\n    _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.dataEmployess.forEach(val => {\n      if (val.user.toUpperCase().startsWith(char)) {\n        isFound = true;\n        alphabetsFiltered.push(val);\n      }\n    });\n    if (!isFound) {\n      alert(\"No data Available\");\n    } else {\n      charClassList.toggle(\"active\");\n      (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_0__.displayTable)([...new Set(alphabetsFiltered)]);\n    }\n  }\n\n  //for changing the filter icon color\n  let isActive = false;\n  let alphabetsArray = document.getElementsByClassName(\"activate-icon\");\n  for (let i = 0; i < alphabetsArray.length; i++) {\n    if (alphabetsArray[i].classList.contains(\"active\")) {\n      isActive = true;\n    }\n  }\n  if (isActive) {\n    document.getElementById(\"filter-icon\").src = \"http://127.0.0.1:5500/task-2/assets/Interface/filter.svg\";\n  } else {\n    document.getElementById(\"filter-icon\").src = \"http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg\";\n  }\n}\ndisplayAlphabets();\n\n//# sourceURL=webpack:///./JS/displayAlpha.js?");

/***/ }),

/***/ "./JS/displayTable.js":
/*!****************************!*\
  !*** ./JS/displayTable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTable: () => (/* binding */ displayTable)\n/* harmony export */ });\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n/* harmony import */ var _handleDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleDelete.js */ \"./JS/handleDelete.js\");\n\n\nlet s = 0;\nfunction displayTable(dataEmployess) {\n  let rows_tr = \"\";\n  dataEmployess.map(function (ele, index) {\n    rows_tr += ` <tr id=\"${index}\">\n         <td><input type=\"checkbox\"  class=\"inp-check\" id=\"check-${index}\" /></td>\n         <td>\n           <div class=\"table-user-info d-flex align-items-center\" id=\"user-profile\">\n               <img src=\"${ele.imgSrc}\" alt=\"\">\n             <div class=\"name-email d-flex d-flex-col\" >\n               <span>${ele.user.toUpperCase()}</span><span class=\"e-mail\">${ele.user.split(\" \")[0]}@tezo.com</span>\n             </div>\n           </div>\n         </td>\n         <td>${ele.location}</td>\n         <td>${ele.department}</td>\n         <td>${ele.role}</td>\n         <td>${ele.empId.slice(0, 8)}</td>\n         <td><span id=\"status-bg\">${ele.status === true ? \"Active\" : \"Inactive\"}</span></td>\n         <td>${ele.joinDate}</td>\n         <td class=\"c-p\"> <span id=\"show-ellipses-${index}\">...</span> <div class=\"d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis\" id=\"ellipsis-table-${index}\" >\n                                                                            <span class=\"c-p\">View Details</span>\n                                                                            <span class=\"c-p\"  id=\"edit-emp-${index}\">   Edit</span>\n                                                                            <span class= \"c-p\"  id=\"delete-emp-${index}\">Delete</span>\n                                                            </div>\n       </td>\n         </tr>`;\n  });\n  document.getElementById(\"employee-table\").innerHTML = rows_tr;\n  attachEventListeners(dataEmployess);\n}\nfunction attachEventListeners(dataEmployess) {\n  dataEmployess.forEach(function (ele, index) {\n    document.getElementById('check-' + index).addEventListener('click', function () {\n      handleSingleCheckbox(this, index);\n    });\n    document.getElementById(`show-ellipses-${index}`).addEventListener('click', function (event) {\n      handleEllipsis(event, index);\n    });\n    document.getElementById(`edit-emp-${index}`).addEventListener('click', () => {\n      handleEditEmp(index);\n    });\n    document.getElementById(`delete-emp-${index}`).addEventListener('click', () => {\n      (0,_handleDelete_js__WEBPACK_IMPORTED_MODULE_1__.handleDelete)(index);\n    });\n  });\n}\nfunction handleSingleCheckbox(e, index) {\n  if (document.getElementById(`check-${index}`).classList.contains(\"checkbox-active\")) {\n    document.getElementById(`check-${index}`).classList.remove(\"checkbox-active\");\n  } else {\n    document.getElementById(`check-${index}`).classList.add(\"checkbox-active\");\n  }\n  e.checked ? s += 1 : s -= 1;\n  console.log(s);\n  if (s > 0) {\n    document.getElementById(\"btn-delete-active\").classList.add(\"btn-active\");\n  } else {\n    document.getElementById(\"btn-delete-active\").classList.remove(\"btn-active\");\n  }\n  if (s == _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess.length) {\n    document.getElementById(\"inp-check-box\").checked = true;\n  } else {\n    document.getElementById(\"inp-check-box\").checked = false;\n  }\n}\nfunction handleEllipsis(event, id) {\n  event.stopPropagation();\n  const ellipsisArray = document.getElementsByClassName(\"ellipsis\");\n  for (let i = 0; i < ellipsisArray.length; i++) {\n    if (i != id && !ellipsisArray[i].classList.contains(\"d-none\")) {\n      ellipsisArray[i].classList.toggle(\"d-none\");\n    }\n  }\n  document.getElementById(`ellipsis-table-${id}`).classList.toggle(\"d-none\");\n}\n;\nconst handleEditEmp = idx => {\n  localStorage.setItem(\"updateEmp\", JSON.stringify(_loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess[idx]));\n  window.location.href = \"./addEmp.html\";\n};\n\n//# sourceURL=webpack:///./JS/displayTable.js?");

/***/ }),

/***/ "./JS/exportToCsv.js":
/*!***************************!*\
  !*** ./JS/exportToCsv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tableToCSV: () => (/* binding */ tableToCSV)\n/* harmony export */ });\nconst tableToCSV = () => {\n  let csvData = [];\n  let rows = document.getElementsByTagName(\"tr\");\n  for (let i = 0; i < rows.length; i++) {\n    let cols = rows[i].querySelectorAll('td,th');\n    let csvRow = [];\n    for (let j = 1; j < cols.length; j++) {\n      csvRow.push(cols[j].innerText);\n    }\n    csvData.push(csvRow.join(\",\"));\n  }\n  csvData = csvData.join(\"\\n\");\n  console.log(csvData);\n  let csvFile = new Blob([csvData], {\n    type: \"text/csv\"\n  });\n  let tmp = document.createElement(\"a\");\n  tmp.download = \"Data.csv\";\n  let url = window.URL.createObjectURL(csvFile);\n  tmp.href = url;\n  tmp.style.display = \"none\";\n  document.body.appendChild(tmp);\n  tmp.click();\n  document.body.removeChild(tmp);\n};\n\n//# sourceURL=webpack:///./JS/exportToCsv.js?");

/***/ }),

/***/ "./JS/filterApply.js":
/*!***************************!*\
  !*** ./JS/filterApply.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFilterApply: () => (/* binding */ handleFilterApply)\n/* harmony export */ });\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n\n\nlet locationOptions = document.getElementById(\"options-body-loc\").classList;\nlet departmentOptions = document.getElementById(\"options-body\").classList;\nlet statusOptions = document.getElementById(\"options-body-status\").classList;\nconst handleFilterApply = () => {\n  //closing the select tags if they are open in filter section\n  if (!locationOptions.contains(\"d-none\")) {\n    locationOptions.toggle(\"d-none\");\n  }\n  if (!departmentOptions.contains(\"d-none\")) {\n    departmentOptions.toggle(\"d-none\");\n  }\n  if (!statusOptions.contains(\"d-none\")) {\n    statusOptions.toggle(\"d-none\");\n  }\n\n  //pushing into the array which are checked and to be filtered\n  let selectedDept = [];\n  let selectedLoc = [];\n  let selectedStatus = [];\n  let checkboxArray = document.getElementsByClassName(\"check-boxes\");\n  let checkboxStatusArray = document.getElementsByClassName(\"check-boxes-status\");\n  let checkboxLocArray = document.getElementsByClassName(\"check-boxes-loc\");\n  for (let cb of checkboxArray) {\n    if (cb.checked == true) {\n      selectedDept.push(cb.name);\n    }\n  }\n  for (let cb of checkboxLocArray) {\n    if (cb.checked == true) {\n      selectedLoc.push(cb.name);\n    }\n  }\n  if (checkboxStatusArray[0].checked == true) {\n    selectedStatus.push(true);\n  }\n  if (checkboxStatusArray[1].checked == true) {\n    selectedStatus.push(false);\n  }\n  //filtering into the new array\n  let filteredArray = _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess.filter(element => {\n    if (selectedStatus.length > 0 && !selectedStatus.includes(element.status)) {\n      return false;\n    }\n    if (selectedDept.length > 0 && !selectedDept.includes(element.department)) {\n      return false;\n    }\n    if (selectedLoc.length > 0 && !selectedLoc.includes(element.location)) {\n      return false;\n    }\n    return true;\n  });\n  (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(filteredArray);\n};\n\n//# sourceURL=webpack:///./JS/filterApply.js?");

/***/ }),

/***/ "./JS/filterLoad.js":
/*!**************************!*\
  !*** ./JS/filterLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFilterDept: () => (/* binding */ handleFilterDept),\n/* harmony export */   handleFilterLoc: () => (/* binding */ handleFilterLoc),\n/* harmony export */   handleFilterStatus: () => (/* binding */ handleFilterStatus)\n/* harmony export */ });\nlet locCount = 0;\nlet deptCount = 0;\nlet statusCount = 0;\nlet value = 0;\nfunction handleFilterDept(dataEmployess) {\n  let deptData = [];\n  dataEmployess.map(ele => {\n    deptData.push(ele.department);\n  });\n  deptData = [...new Set(deptData)];\n  let deptDropDown = \"\";\n  deptData.map((d, idx) => {\n    deptDropDown += `\n          <div class=\"d-flex jc-space-btwn p-3\" >\n          <div class=\"w-5\">\n                  <span >${d}</span>\n          </div>\n          <div >\n              <input type=\"checkbox\"  class=\"check-boxes\" name=\"${d}\" id=\"check-box-dept-${idx}\">\n          </div>\n        </div>`;\n  });\n  document.getElementById(\"options-body\").innerHTML = deptDropDown;\n  attachEventListenersDept(deptData);\n}\nfunction handleFilterLoc(dataEmployess) {\n  let locDropDown = \"\";\n  let loc = [];\n  dataEmployess.map(ele => {\n    loc.push(ele.location);\n  });\n  loc = [...new Set(loc)];\n  loc.map((d, idx) => {\n    locDropDown += `<div class=\"d-flex jc-space-btwn p-3\">\n          <div class=\"w-5\">\n                  <span >${d}</span>\n          </div>\n          <div >\n              <input type=\"checkbox\" class=\"check-boxes-loc\"  name=\"${d}\" id=\"check-box-loc-${idx}\">\n          </div>\n        </div>`;\n  });\n  document.getElementById(\"options-body-loc\").innerHTML = locDropDown;\n  attachEventListenersLoc(loc);\n}\nfunction handleFilterStatus() {\n  let statusDropDown = \"\";\n  const statusArray = [{\n    status: \"Active\"\n  }, {\n    status: \"Inactive\"\n  }];\n  statusArray.map((d, idx) => {\n    statusDropDown += ` <div class=\"d-flex jc-space-btwn p-3\" >\n          \n          <div >\n                  <span >${d.status}</span>\n          </div>\n          <div >\n              <input type=\"checkbox\" class=\"check-boxes-status\"    name=\"${d.status}\" id=\"check-box-status-${idx}\">\n          </div>\n        </div>`;\n  });\n  document.getElementById(\"options-body-status\").innerHTML = statusDropDown;\n  attachEventListenersStatus(statusArray);\n}\nfunction attachEventListenersDept(data) {\n  data.forEach(function (ele, idx) {\n    document.getElementById(`check-box-dept-${idx}`).addEventListener('click', function (event) {\n      enableFilter(this, event);\n      getCheckedCountDept(this, event);\n    });\n  });\n}\nfunction attachEventListenersLoc(data) {\n  data.forEach(function (ele, idx) {\n    document.getElementById(`check-box-loc-${idx}`).addEventListener('click', function (event) {\n      enableFilter(this, event);\n      getCheckedCountLoc(this, event);\n    });\n  });\n}\nfunction attachEventListenersStatus(data) {\n  data.forEach(function (ele, idx) {\n    document.getElementById(`check-box-status-${idx}`).addEventListener('click', function (event) {\n      enableFilter(this, event);\n      getCheckedCountStatus(this, event);\n    });\n  });\n}\nfunction enableFilter(a, event) {\n  event.stopPropagation();\n  a.checked ? value += 1 : value -= 1;\n  console.log(value);\n  if (value > 0) {\n    document.getElementById(\"btn-reset-filter\").style.opacity = 1;\n    document.getElementById(\"btn-filter-apply\").style.backgroundColor = \"red\";\n  } else {\n    document.getElementById(\"btn-filter-apply\").style.backgroundColor = \"#f89191\";\n    document.getElementById(\"btn-reset-filter\").style.opacity = 0.6;\n  }\n}\nfunction getCheckedCountLoc(ele, event) {\n  event.stopPropagation();\n  ele.checked ? locCount += 1 : locCount -= 1;\n  document.getElementById(\"no-of-checks-loc\").innerText = locCount === 0 ? \"\" : `(${locCount})`;\n}\nfunction getCheckedCountDept(ele, event) {\n  event.stopPropagation();\n  ele.checked ? deptCount += 1 : deptCount -= 1;\n  console.log(ele.checked);\n  document.getElementById(\"no-of-checks-dept\").innerText = deptCount === 0 ? \"\" : `(${deptCount})`;\n}\nfunction getCheckedCountStatus(ele, event) {\n  event.stopPropagation();\n  ele.checked ? statusCount += 1 : statusCount -= 1;\n  document.getElementById(\"no-of-checks-status\").innerText = statusCount === 0 ? \"\" : `(${statusCount})`;\n}\n\n//# sourceURL=webpack:///./JS/filterLoad.js?");

/***/ }),

/***/ "./JS/handleDelete.js":
/*!****************************!*\
  !*** ./JS/handleDelete.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDelete: () => (/* binding */ handleDelete)\n/* harmony export */ });\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\nlet s = 0;\n\n\nfunction handleDelete(rowNumber) {\n  if (rowNumber != undefined) {\n    console.log(rowNumber);\n    _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess.splice(rowNumber, 1);\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(_loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess);\n  }\n  let cnt = 0;\n  const checkboxes = document.getElementsByClassName(\"inp-check\");\n  for (var x of checkboxes) {\n    if (x.classList.contains(\"checkbox-active\")) {\n      cnt += 1;\n    }\n  }\n  if (cnt == _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess.length) {\n    _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess = [];\n    display.displayTable(_loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess);\n  } else {\n    for (var x of checkboxes) {\n      if (x.classList.contains(\"checkbox-active\")) {\n        cnt += 1;\n        let remove_id = x.id.split(\"-\")[1];\n        s -= 1;\n        delete _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess[remove_id];\n      }\n    }\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(_loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess);\n  }\n  document.getElementById(\"btn-delete-active\").classList.remove(\"btn-active\");\n}\n\n//# sourceURL=webpack:///./JS/handleDelete.js?");

/***/ }),

/***/ "./JS/handleFilter.js":
/*!****************************!*\
  !*** ./JS/handleFilter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDpt: () => (/* binding */ handleDpt),\n/* harmony export */   handleLoc: () => (/* binding */ handleLoc),\n/* harmony export */   handleStat: () => (/* binding */ handleStat)\n/* harmony export */ });\nlet locationOptions = document.getElementById(\"options-body-loc\").classList;\nlet departmentOptions = document.getElementById(\"options-body\").classList;\nlet statusOptions = document.getElementById(\"options-body-status\").classList;\nfunction handleLoc() {\n  locationOptions.toggle(\"d-none\");\n  if (!departmentOptions.contains(\"d-none\")) {\n    departmentOptions.toggle(\"d-none\");\n  }\n  if (!statusOptions.contains(\"d-none\")) {\n    statusOptions.toggle(\"d-none\");\n  }\n}\nfunction handleDpt() {\n  departmentOptions.toggle(\"d-none\");\n  if (!statusOptions.contains(\"d-none\")) {\n    statusOptions.toggle(\"d-none\");\n  }\n  if (!locationOptions.contains(\"d-none\")) {\n    locationOptions.toggle(\"d-none\");\n  }\n}\nfunction handleStat() {\n  statusOptions.toggle(\"d-none\");\n  if (!locationOptions.contains(\"d-none\")) {\n    locationOptions.toggle(\"d-none\");\n  }\n  if (!departmentOptions.contains(\"d-none\")) {\n    departmentOptions.toggle(\"d-none\");\n  }\n}\n\n//# sourceURL=webpack:///./JS/handleFilter.js?");

/***/ }),

/***/ "./JS/handleReset.js":
/*!***************************!*\
  !*** ./JS/handleReset.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFilterReset: () => (/* binding */ handleFilterReset)\n/* harmony export */ });\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n\n\nlet locationOptions = document.getElementById(\"options-body-loc\").classList;\nlet departmentOptions = document.getElementById(\"options-body\").classList;\nlet statusOptions = document.getElementById(\"options-body-status\").classList;\nconst handleFilterReset = () => {\n  let locCount = 0;\n  let statusCount = 0;\n  let deptCount = 0;\n  document.getElementById(\"no-of-checks-loc\").innerText = \"\";\n  document.getElementById(\"no-of-checks-dept\").innerText = \"\";\n  document.getElementById(\"no-of-checks-status\").innerText = \"\";\n  if (!locationOptions.contains(\"d-none\")) {\n    locationOptions.toggle(\"d-none\");\n  }\n  if (!departmentOptions.contains(\"d-none\")) {\n    departmentOptions.toggle(\"d-none\");\n  }\n  if (!statusOptions.contains(\"d-none\")) {\n    statusOptions.toggle(\"d-none\");\n  }\n  let checkboxLocArray = document.getElementsByClassName(\"check-boxes-loc\");\n  for (let cb of checkboxLocArray) {\n    if (cb.checked == true) {\n      cb.checked = false;\n    }\n  }\n  let checkboxArray = document.getElementsByClassName(\"check-boxes\");\n  for (let cb of checkboxArray) {\n    if (cb.checked == true) {\n      cb.checked = false;\n    }\n  }\n  let checkboxStatusArray = document.getElementsByClassName(\"check-boxes-status\");\n  let selectedStatus = [];\n  if (checkboxStatusArray[0].checked == true) {\n    checkboxStatusArray[0].checked = false;\n  }\n  if (checkboxStatusArray[1].checked == true) {\n    checkboxStatusArray[1].checked = false;\n  }\n  document.getElementById(\"btn-filter-apply\").style.backgroundColor = \"#f89191\";\n  document.getElementById(\"btn-reset-filter\").style.opacity = 0.6;\n  (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_0__.displayTable)(_loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.dataEmployess);\n};\n\n//# sourceURL=webpack:///./JS/handleReset.js?");

/***/ }),

/***/ "./JS/handleSearchBox.js":
/*!*******************************!*\
  !*** ./JS/handleSearchBox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSearchBox: () => (/* binding */ handleSearchBox)\n/* harmony export */ });\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n\n\nfunction handleSearchBox() {\n  const searchArr = [];\n  const searchValue = document.getElementById(\"search-input\").value;\n  _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.dataEmployess.map((val, idx) => {\n    if (val.user.toUpperCase().startsWith(searchValue) || val.user.toLowerCase().startsWith(searchValue)) {\n      searchArr.push(val);\n    }\n  });\n  (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_0__.displayTable)(searchArr);\n}\n\n//# sourceURL=webpack:///./JS/handleSearchBox.js?");

/***/ }),

/***/ "./JS/handleSorting.js":
/*!*****************************!*\
  !*** ./JS/handleSorting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sorting: () => (/* binding */ sorting)\n/* harmony export */ });\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n\n\nlet isAscending = true;\nfunction sorting(column) {\n  if (column == 1) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.user < b.user) return isAscending ? -1 : 1;\n      if (a.user > b.user) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 2) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.location < b.location) return isAscending ? -1 : 1;\n      if (a.location > b.location) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 3) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.department < b.department) return isAscending ? -1 : 1;\n      if (a.department > b.department) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 4) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.role < b.role) return isAscending ? -1 : 1;\n      if (a.role > b.role) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 5) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.empId < b.empId) return isAscending ? -1 : 1;\n      if (a.empId > b.empId) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 6) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.status < b.status) return isAscending ? -1 : 1;\n      if (a.status > b.status) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n  if (column == 7) {\n    isAscending = !isAscending;\n    const sortedData = [..._loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess].sort(function (a, b) {\n      if (a.joinDate < b.joinDate) return isAscending ? -1 : 1;\n      if (a.joinDate > b.joinDate) return isAscending ? 1 : -1;\n      return 0;\n    });\n    (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(sortedData);\n  }\n}\n\n//# sourceURL=webpack:///./JS/handleSorting.js?");

/***/ }),

/***/ "./JS/hideNav.js":
/*!***********************!*\
  !*** ./JS/hideNav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideNavBar: () => (/* binding */ hideNavBar)\n/* harmony export */ });\nlet isNavHidden = true;\nfunction hideNavBar() {\n  document.querySelector(\".vertical-page\").classList.toggle(\"w-100\");\n  document.getElementById(\"side-nav-bar\").classList.toggle(\"hide-navbar\");\n  document.getElementById(\"hide-install-box\").classList.toggle(\"hide-install\");\n  document.getElementById(\"nav-hide-logo\").classList.toggle(\"trim-logo\");\n  let x = document.getElementsByClassName(\"nav-text\");\n  let y = document.getElementsByClassName(\"nav-text-vh\");\n  y[0].classList.add(\"hide-vh\");\n  y[1].classList.add(\"hide-vh\");\n  let i;\n  if (isNavHidden) {\n    isNavHidden = false;\n    for (i = 0; i < x.length; i++) {\n      x[i].classList.add(\"hide-text\");\n      console.log(x[i].classList);\n    }\n  } else {\n    y[0].classList.remove(\"hide-vh\");\n    y[1].classList.remove(\"hide-vh\");\n    isNavHidden = true;\n    for (i = 0; i < x.length; i++) {\n      x[i].classList.remove(\"hide-text\");\n    }\n  }\n  document.getElementById(\"close-btn\").classList.toggle(\"rotate-arrow\");\n}\n\n// hideNavBar();\n\n//# sourceURL=webpack:///./JS/hideNav.js?");

/***/ }),

/***/ "./JS/index.js":
/*!*********************!*\
  !*** ./JS/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleReset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleReset.js */ \"./JS/handleReset.js\");\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n/* harmony import */ var _hideNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hideNav.js */ \"./JS/hideNav.js\");\n/* harmony import */ var _displayAlpha_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayAlpha.js */ \"./JS/displayAlpha.js\");\n/* harmony import */ var _handleFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleFilter.js */ \"./JS/handleFilter.js\");\n/* harmony import */ var _filterApply_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterApply.js */ \"./JS/filterApply.js\");\n/* harmony import */ var _handleSorting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleSorting.js */ \"./JS/handleSorting.js\");\n/* harmony import */ var _exportToCsv_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exportToCsv.js */ \"./JS/exportToCsv.js\");\n/* harmony import */ var _disable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disable.js */ \"./JS/disable.js\");\n/* harmony import */ var _addEditEmployee_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addEditEmployee.js */ \"./JS/addEditEmployee.js\");\n/* harmony import */ var _handleDelete_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handleDelete.js */ \"./JS/handleDelete.js\");\n/* harmony import */ var _inpCheckbox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inpCheckbox.js */ \"./JS/inpCheckbox.js\");\n/* harmony import */ var _handleSearchBox_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handleSearchBox.js */ \"./JS/handleSearchBox.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.getElementById(\"close-btn\").addEventListener('click', () => {\n  (0,_hideNav_js__WEBPACK_IMPORTED_MODULE_2__.hideNavBar)();\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_loadEmp_js__WEBPACK_IMPORTED_MODULE_1__.LoadEmployeePage)();\n});\n(0,_displayAlpha_js__WEBPACK_IMPORTED_MODULE_3__.displayAlphabets)();\ndocument.getElementById(\"filter-status\").addEventListener(\"click\", () => {\n  (0,_handleFilter_js__WEBPACK_IMPORTED_MODULE_4__.handleStat)();\n});\ndocument.getElementById(\"filter-department\").addEventListener(\"click\", () => {\n  (0,_handleFilter_js__WEBPACK_IMPORTED_MODULE_4__.handleDpt)();\n});\ndocument.getElementById(\"filter-location\").addEventListener(\"click\", () => {\n  (0,_handleFilter_js__WEBPACK_IMPORTED_MODULE_4__.handleLoc)();\n});\ndocument.getElementById(\"btn-filter-apply\").addEventListener(\"click\", () => {\n  (0,_filterApply_js__WEBPACK_IMPORTED_MODULE_5__.handleFilterApply)();\n});\ndocument.getElementById('sort-btn-user').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(1);\n});\ndocument.getElementById('sort-btn-loc').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(2);\n});\ndocument.getElementById('sort-btn-dep').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(3);\n});\ndocument.getElementById('sort-btn-role').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(4);\n});\ndocument.getElementById('sort-btn-emp').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(5);\n});\ndocument.getElementById('sort-btn-status').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(6);\n});\ndocument.getElementById('sort-btn-join-date').addEventListener(\"click\", () => {\n  (0,_handleSorting_js__WEBPACK_IMPORTED_MODULE_6__.sorting)(7);\n});\ndocument.getElementById(\"btn-export-to-csv\").addEventListener(\"click\", () => {\n  (0,_exportToCsv_js__WEBPACK_IMPORTED_MODULE_7__.tableToCSV)();\n});\ndocument.getElementById(\"btn-reset-filter\").addEventListener(\"click\", () => {\n  (0,_handleReset_js__WEBPACK_IMPORTED_MODULE_0__.handleFilterReset)();\n});\ndocument.getElementById(\"body\").addEventListener(\"click\", () => {\n  (0,_disable_js__WEBPACK_IMPORTED_MODULE_8__.disableDropDowns)();\n});\ndocument.getElementById(\"btn-add-emp\").addEventListener(\"click\", () => {\n  (0,_addEditEmployee_js__WEBPACK_IMPORTED_MODULE_9__.handleAddEmployee)();\n});\ndocument.getElementById(\"btn-delete-active\").addEventListener(\"click\", () => {\n  (0,_handleDelete_js__WEBPACK_IMPORTED_MODULE_10__.handleDelete)();\n});\ndocument.getElementById(\"inp-check-box\").addEventListener(\"click\", event => {\n  (0,_inpCheckbox_js__WEBPACK_IMPORTED_MODULE_11__.handleCheckBox)(event.target);\n});\ndocument.getElementById(\"search-input\").addEventListener('keyup', () => {\n  (0,_handleSearchBox_js__WEBPACK_IMPORTED_MODULE_12__.handleSearchBox)();\n});\n\n//# sourceURL=webpack:///./JS/index.js?");

/***/ }),

/***/ "./JS/inpCheckbox.js":
/*!***************************!*\
  !*** ./JS/inpCheckbox.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleCheckBox: () => (/* binding */ handleCheckBox)\n/* harmony export */ });\n/* harmony import */ var _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadEmp.js */ \"./JS/loadEmp.js\");\n\nlet s;\nfunction handleCheckBox(checkbox) {\n  if (checkbox.checked == true) {\n    s = _loadEmp_js__WEBPACK_IMPORTED_MODULE_0__.dataEmployess.length;\n    document.getElementById(\"btn-delete-active\").classList.add(\"btn-active\");\n    const checkboxes = document.getElementsByClassName(\"inp-check\");\n    for (var x of checkboxes) {\n      x.classList.add(\"checkbox-active\");\n      x.checked = true;\n    }\n  } else {\n    s = 0;\n    document.getElementById(\"btn-delete-active\").classList.remove(\"btn-active\");\n    const checkboxes = document.getElementsByClassName(\"inp-check\");\n    for (var x of checkboxes) {\n      x.classList.remove(\"checkbox-active\");\n      x.checked = false;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./JS/inpCheckbox.js?");

/***/ }),

/***/ "./JS/loadEmp.js":
/*!***********************!*\
  !*** ./JS/loadEmp.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadEmployeePage: () => (/* binding */ LoadEmployeePage),\n/* harmony export */   checkPreviousData: () => (/* binding */ checkPreviousData),\n/* harmony export */   dataEmployess: () => (/* binding */ dataEmployess),\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _filterLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterLoad.js */ \"./JS/filterLoad.js\");\n/* harmony import */ var _displayTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTable.js */ \"./JS/displayTable.js\");\n\n\nlet dataEmployess;\nasync function LoadEmployeePage() {\n  await fetchData(checkPreviousData());\n  (0,_filterLoad_js__WEBPACK_IMPORTED_MODULE_0__.handleFilterDept)(dataEmployess);\n  (0,_filterLoad_js__WEBPACK_IMPORTED_MODULE_0__.handleFilterLoc)(dataEmployess);\n  (0,_filterLoad_js__WEBPACK_IMPORTED_MODULE_0__.handleFilterStatus)();\n}\nasync function fetchData(data) {\n  let response = await (await fetch(\"./data1.json\")).json();\n  response = response.concat(data);\n  dataEmployess = response;\n  (0,_displayTable_js__WEBPACK_IMPORTED_MODULE_1__.displayTable)(dataEmployess);\n}\nfunction checkPreviousData() {\n  let newdata = localStorage.getItem(\"addData\");\n  if (newdata) {\n    newdata = JSON.parse(newdata);\n    return newdata;\n  } else {\n    return [];\n  }\n}\n\n//# sourceURL=webpack:///./JS/loadEmp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./JS/index.js");
/******/ 	
/******/ })()
;