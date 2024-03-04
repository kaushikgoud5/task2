// import hideNavBar  from './hidenav';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c, _d;
var dataEmployess = [];
var alphabetsFiltered = [];
var isAscending = true;
var locCount = 0;
var deptCount = 0;
var statusCount = 0;
var locationOptions = (_a = document.getElementById("options-body-loc")) === null || _a === void 0 ? void 0 : _a.classList;
var departmentOptions = (_b = document.getElementById("options-body")) === null || _b === void 0 ? void 0 : _b.classList;
var statusOptions = (_c = document.getElementById("options-body-status")) === null || _c === void 0 ? void 0 : _c.classList;
// require(['./hidenav'], function (module1) {
//   module1.hideNavBar();
// });
var response = [];
function fetchData(data) {
    // let response = await (await fetch("./data1.json")).json();
    response = response.concat(data);
    dataEmployess = response;
    displayTable(response);
}
//checking the data from th local storage adn adding it to the main data
function checkPreviousData() {
    var newdata = localStorage.getItem("addData");
    if (newdata) {
        newdata = JSON.parse(newdata);
        return newdata;
    }
    else {
        return [];
    }
}
//initially loading the options in filter section
function LoadEmployeePage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData(checkPreviousData())];
                case 1:
                    _a.sent();
                    handleFilterLoc();
                    handleFilterDept();
                    handleFilterStatus();
                    return [2 /*return*/];
            }
        });
    });
}
// hideNavBar();
//hiding the nav-bar when user clicks on the icon
function displayAlphabets() {
    var alpha = "";
    for (var i = 65; i < 91; i++) {
        alpha += "<span id=".concat(i, "  class=\"activate-icon\" onclick=\"handleClickFilter(").concat(i, ")\">").concat(String.fromCharCode(i), "</span>");
    }
    document.getElementById("demo").innerHTML = alpha;
}
function displayTable(dataEmployess) {
    var rows_tr = "";
    dataEmployess.map(function (ele, index) {
        rows_tr += " <tr id=\"".concat(index, "\">\n   <td><input type=\"checkbox\"  class=\"inp-check\" id=\"check-").concat(index, "\" onclick=\"handleSingleCheckbox(this,").concat(index, ")\" /></td>\n   <td>\n     <div class=\"table-user-info d-flex align-items-center\" id=\"user-profile\">\n         <img src=\"").concat(ele.imgSrc, "\" alt=\"\">\n       <div class=\"name-email d-flex d-flex-col\" >\n         <span>").concat(ele.user.toUpperCase(), "</span><span class=\"e-mail\">").concat(ele.user.split(" ")[0], "@tezo.com</span>\n       </div>\n     </div>\n   </td>\n   <td>").concat(ele.location, "</td>\n   <td>").concat(ele.department, "</td>\n   <td>").concat(ele.role, "</td>\n   <td>").concat(ele.empId.slice(0, 8), "</td>\n   <td><span id=\"status-bg\">Active</span></td>\n   <td>").concat(ele.joinDate, "</td>\n   <td class=\"c-p\"> <span onclick=\"handleEllipsis(event,").concat(index, ")\">...</span> <div class=\"d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis\" id=\"ellipsis-table-").concat(index, "\" >\n                                                                       <span class=\"c-p\">View Details</span>\n                                                               <span class=\"c-p\" onclick=\"handleEditEmp(").concat(index, ")\">   Edit</span>\n                                                                <span class= \"c-p\"  onclick=\"handleDelete(").concat(index, ")\">Delete</span>\n                                                      </div>\n </td>\n   </tr>");
    });
    document.getElementById("employee-table").innerHTML = rows_tr;
}
function handleClickFilter(ascciiValue) {
    var _a;
    var char = document.getElementById(ascciiValue).innerText;
    var charClassList = (_a = document.getElementById(ascciiValue)) === null || _a === void 0 ? void 0 : _a.classList;
    if (charClassList === null || charClassList === void 0 ? void 0 : charClassList.contains("active")) {
        charClassList.remove("active");
        var filterdArr = alphabetsFiltered.filter(function (i) { return i.user.toUpperCase()[0] === char; });
        for (var i = 0; i < alphabetsFiltered.length; i++) {
            for (var j = 0; j < filterdArr.length; j++) {
                if (alphabetsFiltered[i].user == filterdArr[j].user) {
                    alphabetsFiltered.splice(i, 1);
                }
            }
        }
        displayTable(alphabetsFiltered.length == 0 ? dataEmployess : alphabetsFiltered);
    }
    else {
        var isFound_1 = false;
        dataEmployess.forEach(function (val) {
            if (val.user.toUpperCase()[0] === char) {
                isFound_1 = true;
                alphabetsFiltered.push(val);
            }
        });
        if (!isFound_1) {
            alert("No data Available");
        }
        else {
            charClassList === null || charClassList === void 0 ? void 0 : charClassList.toggle("active");
            displayTable(__spreadArray([], alphabetsFiltered, true));
        }
    }
    //for changing the filter icon color
    var isActive = false;
    var alphabetsArray = document.getElementsByClassName("activate-icon");
    for (var i = 0; i < alphabetsArray.length; i++) {
        if (alphabetsArray[i].classList.contains("active")) {
            isActive = true;
        }
    }
    if (isActive) {
        document.getElementById("filter-icon").src =
            "http://127.0.0.1:5500/task-2/assets/Interface/filter.svg";
    }
    else {
        document.getElementById("filter-icon").src =
            "http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg";
    }
}
function sorting(column) {
    if (column == 1) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.user < b.user)
                return isAscending ? -1 : 1;
            if (a.user > b.user)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 2) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.location < b.location)
                return isAscending ? -1 : 1;
            if (a.location > b.location)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 3) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.department < b.department)
                return isAscending ? -1 : 1;
            if (a.department > b.department)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 4) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.role < b.role)
                return isAscending ? -1 : 1;
            if (a.role > b.role)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 5) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.empId < b.empId)
                return isAscending ? -1 : 1;
            if (a.empId > b.empId)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 6) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.status < b.status)
                return isAscending ? -1 : 1;
            if (a.status > b.status)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
    if (column == 7) {
        isAscending = !isAscending;
        var sortedData = __spreadArray([], dataEmployess, true).sort(function (a, b) {
            if (a.joinDate < b.joinDate)
                return isAscending ? -1 : 1;
            if (a.joinDate > b.joinDate)
                return isAscending ? 1 : -1;
            return 0;
        });
        displayTable(sortedData);
    }
}
function handleDelete(rowNumber) {
    var _a;
    if (rowNumber != undefined) {
        console.log(rowNumber);
        dataEmployess.splice(rowNumber, 1);
        displayTable(dataEmployess);
    }
    var cnt = 0;
    var checkboxes = document.getElementsByClassName("inp-check");
    for (var i = 0; i < checkboxes.length; i++) {
        var x = checkboxes[i];
        if (x.classList.contains("checkbox-active")) {
            cnt += 1;
        }
    }
    if (cnt == dataEmployess.length) {
        dataEmployess = [];
        displayTable(dataEmployess);
    }
    else {
        for (var i = 0; i < checkboxes.length; i++) {
            var x = checkboxes[i];
            if (x.classList.contains("checkbox-active")) {
                cnt += 1;
                var remove_id = x.id.split("-")[1];
                s -= 1;
                delete dataEmployess[remove_id];
            }
        }
        displayTable(dataEmployess);
    }
    (_a = document.getElementById("btn-delete-active")) === null || _a === void 0 ? void 0 : _a.classList.remove("btn-active");
}
var s = 0;
function handleCheckBox(checkbox) {
    var _a, _b;
    if (checkbox.checked == true) {
        s = dataEmployess.length;
        (_a = document.getElementById("btn-delete-active")) === null || _a === void 0 ? void 0 : _a.classList.add("btn-active");
        var checkboxes = document.getElementsByClassName("inp-check");
        for (var i = 0; i < checkboxes.length; i++) {
            var x = checkboxes[i];
            x.classList.add("checkbox-active");
            x.checked = true;
        }
    }
    else {
        s = 0;
        (_b = document.getElementById("btn-delete-active")) === null || _b === void 0 ? void 0 : _b.classList.remove("btn-active");
        var checkboxes = document.getElementsByClassName("inp-check");
        var cnt = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            var x = checkboxes[i];
            x.classList.remove("checkbox-active");
            x.checked = false;
        }
    }
}
function handleSingleCheckbox(e, index) {
    var _a, _b, _c, _d, _e;
    if ((_a = document
        .getElementById("check-".concat(index))) === null || _a === void 0 ? void 0 : _a.classList.contains("checkbox-active")) {
        (_b = document
            .getElementById("check-".concat(index))) === null || _b === void 0 ? void 0 : _b.classList.remove("checkbox-active");
    }
    else {
        (_c = document.getElementById("check-".concat(index))) === null || _c === void 0 ? void 0 : _c.classList.add("checkbox-active");
    }
    e.checked ? (s += 1) : (s -= 1);
    if (s > 0) {
        (_d = document.getElementById("btn-delete-active")) === null || _d === void 0 ? void 0 : _d.classList.add("btn-active");
    }
    else {
        (_e = document
            .getElementById("btn-delete-active")) === null || _e === void 0 ? void 0 : _e.classList.remove("btn-active");
    }
    if (s == dataEmployess.length) {
        document.getElementById("inp-check-box").checked =
            true;
    }
    else {
        document.getElementById("inp-check-box").checked =
            false;
    }
}
function handleSearchBox() {
    var searchArr = [];
    var searchValue = document.getElementById("search-input").value;
    dataEmployess.map(function (val, idx) {
        if (val.user.toUpperCase()[0] === searchValue ||
            val.user.toLowerCase()[0] === searchValue) {
            searchArr.push(val);
        }
    });
    displayTable(searchArr);
}
function handleFilterDept() {
    var deptData = [];
    dataEmployess.map(function (ele) {
        deptData.push(ele.department);
    });
    // deptData = [...new Set(deptData)];
    var deptDropDown = "";
    deptData.map(function (d) {
        deptDropDown += "\n    <div class=\"d-flex jc-space-btwn p-3\" >\n    <div class=\"w-5\">\n            <span >".concat(d, "</span>\n    </div>\n    <div >\n        <input type=\"checkbox\"  class=\"check-boxes\"  onclick=\"enableFilter(this,event);getCheckedCountDept(this,event)\"      name=\"").concat(d, "\" id=\"\">\n    </div>\n  </div>");
    });
    document.getElementById("options-body").innerHTML = deptDropDown;
}
function handleFilterLoc() {
    var locDropDown = "";
    var loc = [];
    dataEmployess.map(function (ele) {
        loc.push(ele.location);
    });
    // loc = [...new Set(loc)];
    loc.map(function (d) {
        locDropDown += "<div class=\"d-flex jc-space-btwn p-3\">\n    <div class=\"w-5\">\n            <span >".concat(d, "</span>\n    </div>\n    <div >\n        <input type=\"checkbox\" class=\"check-boxes-loc\" onclick=\"enableFilter(this,event);getCheckedCountLoc(this,event);\"   name=\"").concat(d, "\" id=\"\">\n    </div>\n  </div>");
    });
    document.getElementById("options-body-loc").innerHTML = locDropDown;
}
function handleFilterStatus() {
    var statusDropDown = "";
    var statusArray = [
        {
            status: "Active",
        },
        {
            status: "Inactive",
        },
    ];
    statusArray.map(function (d) {
        statusDropDown += " <div class=\"d-flex jc-space-btwn p-3\" >\n    \n    <div >\n            <span >".concat(d.status, "</span>\n    </div>\n    <div >\n        <input type=\"checkbox\" class=\"check-boxes-status\"   onclick=\"enableFilter(this,event);getCheckedCountStatus(this,event);\"  name=\"").concat(d.status, "\" id=\"\">\n    </div>\n  </div>");
    });
    document.getElementById("options-body-status").innerHTML = statusDropDown;
}
function handleLoc(event) {
    event.stopPropagation();
    locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    if (!(departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.contains("d-none"))) {
        departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    }
    if (!(statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.contains("d-none"))) {
        statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    }
}
function handleDpt(event) {
    event.stopPropagation();
    departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    if (!(statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.contains("d-none"))) {
        statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    }
    if (!(locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.contains("d-none"))) {
        locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    }
}
function handleStat(event) {
    event.stopPropagation();
    statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    if (!(locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.contains("d-none"))) {
        locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    }
    if (!(departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.contains("d-none"))) {
        departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    }
}
function handleAssignDropDown(event) {
    var _a;
    event.stopPropagation();
    (_a = document.getElementById("add-roles")) === null || _a === void 0 ? void 0 : _a.classList.toggle("d-none");
}
var value = 0;
function enableFilter(a, event) {
    event.stopPropagation();
    a.checked ? (value += 1) : (value -= 1);
    if (value > 0) {
        document.getElementById("btn-reset-filter").style.opacity = "1";
        document.getElementById("btn-filter-apply").style.backgroundColor = "red";
    }
    else {
        document.getElementById("btn-filter-apply").style.backgroundColor =
            "#f89191";
        document.getElementById("btn-reset-filter").style.opacity = "0.6";
    }
}
function getCheckedCountLoc(ele, event) {
    event.stopPropagation();
    ele.checked ? (locCount += 1) : (locCount -= 1);
    document.getElementById("no-of-checks-loc").innerText =
        locCount === 0 ? "" : "(".concat(locCount, ")");
}
function getCheckedCountDept(ele, event) {
    event.stopPropagation();
    ele.checked ? (deptCount += 1) : (deptCount -= 1);
    document.getElementById("no-of-checks-dept").innerText =
        deptCount === 0 ? "" : "(".concat(deptCount, ")");
}
function getCheckedCountStatus(ele, event) {
    event.stopPropagation();
    ele.checked ? (statusCount += 1) : (statusCount -= 1);
    document.getElementById("no-of-checks-status").innerText =
        statusCount === 0 ? "" : "(".concat(statusCount, ")");
}
var handleFilterApply = function () {
    //closing the select tags if they are open in filter section
    if (!(locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.contains("d-none"))) {
        locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    }
    if (!(departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.contains("d-none"))) {
        departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    }
    if (!(statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.contains("d-none"))) {
        statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    }
    //pushing into the array which are checked and to be filtered
    var selectedDept = [];
    var selectedLoc = [];
    var selectedStatus = [];
    var checkboxArray = document.getElementsByClassName("check-boxes");
    var checkboxStatusArray = document.getElementsByClassName("check-boxes-status");
    var checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
    for (var i = 0; i < checkboxArray.length; i++) {
        var cb = checkboxArray[i];
        if (cb.checked == true) {
            selectedDept.push(cb.name);
        }
    }
    for (var i = 0; i < checkboxLocArray.length; i++) {
        var cb = checkboxLocArray[i];
        if (cb.checked == true) {
            selectedLoc.push(cb.name);
        }
    }
    if (checkboxStatusArray[0].checked == true) {
        selectedStatus.push(true);
    }
    if (checkboxStatusArray[1].checked == true) {
        selectedStatus.push(false);
    }
    //filtering into the new array
    var filteredArray = dataEmployess.filter(function (element) {
        if (selectedStatus.length > 0 &&
            selectedStatus.indexOf(element.status) === -1) {
            return false;
        }
        if (selectedDept.length > 0 &&
            selectedDept.indexOf(element.department) === -1) {
            return false;
        }
        if (selectedLoc.length > 0 &&
            selectedLoc.indexOf(element.location) === -1) {
            return false;
        }
        return true;
    });
    displayTable(filteredArray);
};
var tableToCSV = function () {
    var csvData = [];
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll("td,th");
        var csvRow = [];
        for (var j = 1; j < cols.length; j++) {
            csvRow.push(cols[j].innerText);
        }
        csvData.push(csvRow.join(","));
    }
    var csvString = csvData.join("\n");
    var csvFile = new Blob([csvString], { type: "text/csv" });
    var tmp = document.createElement("a");
    tmp.download = "Data.csv";
    var url = window.URL.createObjectURL(csvFile);
    tmp.href = url;
    tmp.style.display = "none";
    document.body.appendChild(tmp);
    tmp.click();
    document.body.removeChild(tmp);
};
var handleEllipsis = function (event, id) {
    var _a;
    event.stopPropagation();
    var ellipsisArray = document.getElementsByClassName("ellipsis");
    for (var i = 0; i < ellipsisArray.length; i++) {
        if (i != id && !ellipsisArray[i].classList.contains("d-none")) {
            ellipsisArray[i].classList.toggle("d-none");
        }
    }
    (_a = document.getElementById("ellipsis-table-".concat(id))) === null || _a === void 0 ? void 0 : _a.classList.toggle("d-none");
};
var handleFilterReset = function () {
    locCount = 0;
    statusCount = 0;
    deptCount = 0;
    document.getElementById("no-of-checks-loc").innerText = "";
    document.getElementById("no-of-checks-dept").innerText = "";
    document.getElementById("no-of-checks-status").innerText = "";
    if (!(locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.contains("d-none"))) {
        locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    }
    if (!(departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.contains("d-none"))) {
        departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    }
    if (!(statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.contains("d-none"))) {
        statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    }
    var checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
    for (var i = 0; i < checkboxLocArray.length; i++) {
        var cb = checkboxLocArray[i];
        if (cb.checked == true) {
            cb.checked = false;
        }
    }
    var checkboxArray = document.getElementsByClassName("check-boxes");
    for (var i = 0; i < checkboxArray.length; i += 1) {
        var cb = checkboxArray[i];
        if (cb.checked == true) {
            cb.checked = false;
        }
    }
    var checkboxStatusArray = document.getElementsByClassName("check-boxes-status");
    if (checkboxStatusArray[0].checked == true) {
        checkboxStatusArray[0].checked = false;
    }
    if (checkboxStatusArray[1].checked == true) {
        checkboxStatusArray[1].checked = false;
    }
    document.getElementById("btn-filter-apply").style.backgroundColor =
        "#f89191";
    document.getElementById("btn-reset-filter").style.opacity = "0.6";
    // alphabetsFiltered.length > 0 ? displayTable(alphabetsFiltered) : displayTable(dataEmployess);
    displayTable(dataEmployess);
};
(_d = document.getElementById("body")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    if (!(locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.contains("d-none"))) {
        locationOptions === null || locationOptions === void 0 ? void 0 : locationOptions.toggle("d-none");
    }
    if (!(departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.contains("d-none"))) {
        departmentOptions === null || departmentOptions === void 0 ? void 0 : departmentOptions.toggle("d-none");
    }
    if (!(statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.contains("d-none"))) {
        statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.toggle("d-none");
    }
    var ellipsisArray = document.getElementsByClassName("ellipsis");
    for (var i = 0; i < ellipsisArray.length; i++) {
        if (!ellipsisArray[i].classList.contains("d-none")) {
            ellipsisArray[i].classList.toggle("d-none");
        }
    }
});
var handleEditEmp = function (idx) {
    localStorage.setItem("updateEmp", JSON.stringify(dataEmployess[idx]));
    window.location.href = "./addEmp.html";
};
var handleAddEmployee = function () {
    localStorage.removeItem("updateEmp");
    window.location.href = "./addEmp.html";
};
displayAlphabets();
