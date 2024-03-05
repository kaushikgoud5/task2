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
var response = [];
var alphabetsFiltered = [];
var isAscending = true;
var ifAnySelected = 0;
var checkedCount = 0;
var locCount = 0;
var deptCount = 0;
var statusCount = 0;
var locationOptions = (_a = document.getElementById("options-body-loc")) === null || _a === void 0 ? void 0 : _a.classList;
var departmentOptions = (_b = document.getElementById("options-body")) === null || _b === void 0 ? void 0 : _b.classList;
var statusOptions = (_c = document.getElementById("options-body-status")) === null || _c === void 0 ? void 0 : _c.classList;
var Sorting;
(function (Sorting) {
    Sorting[Sorting["user"] = 1] = "user";
    Sorting[Sorting["location"] = 2] = "location";
    Sorting[Sorting["department"] = 3] = "department";
    Sorting[Sorting["role"] = 4] = "role";
    Sorting[Sorting["empId"] = 5] = "empId";
    Sorting[Sorting["status"] = 6] = "status";
    Sorting[Sorting["joinDate"] = 7] = "joinDate";
})(Sorting || (Sorting = {}));
function fetchData(data) {
    response = response.concat(data);
    dataEmployess = response;
    displayTable(response);
}
function checkPreviousData() {
    var newdata = localStorage.getItem("addData");
    if (newdata) {
        var newdataParsed = JSON.parse(newdata);
        return newdataParsed;
    }
    else {
        return [];
    }
}
function LoadEmployeePage() {
    fetchData(checkPreviousData());
    handleFilterLoc();
    handleFilterDept();
    handleFilterStatus();
}
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
    if (Sorting.user === column) {
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
    if (Sorting.location === column) {
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
    if (Sorting.department === column) {
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
    if (Sorting.role === column) {
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
    if (Sorting.empId === column) {
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
    if (Sorting.status === column) {
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
    if (Sorting.joinDate === column) {
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
        dataEmployess.splice(rowNumber, 1);
        displayTable(dataEmployess);
    }
    var cnt = 0;
    var checkboxes = document.getElementsByClassName("inp-check");
    for (var i = 0; i < checkboxes.length; i++) {
        var singleCheckBoxItem = checkboxes[i];
        if (singleCheckBoxItem.classList.contains("checkbox-active")) {
            cnt += 1;
            var remove_id = singleCheckBoxItem.id.split("-")[1];
            checkedCount -= 1;
            delete dataEmployess[remove_id];
        }
    }
    if (cnt == dataEmployess.length) {
        dataEmployess = [];
    }
    displayTable(dataEmployess);
    (_a = document.getElementById("btn-delete-active")) === null || _a === void 0 ? void 0 : _a.classList.remove("btn-active");
}
function handleCheckBox(checkbox) {
    var _a, _b;
    if (checkbox.checked == true) {
        checkedCount = dataEmployess.length;
        (_a = document.getElementById("btn-delete-active")) === null || _a === void 0 ? void 0 : _a.classList.add("btn-active");
        var checkboxes = document.getElementsByClassName("inp-check");
        for (var i = 0; i < checkboxes.length; i++) {
            var singleCheckBoxItem = checkboxes[i];
            singleCheckBoxItem.classList.add("checkbox-active");
            singleCheckBoxItem.checked = true;
        }
    }
    else {
        checkedCount = 0;
        (_b = document.getElementById("btn-delete-active")) === null || _b === void 0 ? void 0 : _b.classList.remove("btn-active");
        var checkboxes = document.getElementsByClassName("inp-check");
        for (var i = 0; i < checkboxes.length; i++) {
            var singleCheckBoxItem = checkboxes[i];
            singleCheckBoxItem.classList.remove("checkbox-active");
            singleCheckBoxItem.checked = false;
        }
    }
}
function handleSingleCheckbox(currEvent, index) {
    var _a, _b, _c, _d, _e;
    if ((_a = document
        .getElementById("check-".concat(index))) === null || _a === void 0 ? void 0 : _a.classList.contains("checkbox-active")) {
        (_b = document
            .getElementById("check-".concat(index))) === null || _b === void 0 ? void 0 : _b.classList.remove("checkbox-active");
    }
    else {
        (_c = document.getElementById("check-".concat(index))) === null || _c === void 0 ? void 0 : _c.classList.add("checkbox-active");
    }
    currEvent.checked ? (checkedCount += 1) : (checkedCount -= 1);
    if (checkedCount > 0) {
        (_d = document.getElementById("btn-delete-active")) === null || _d === void 0 ? void 0 : _d.classList.add("btn-active");
    }
    else {
        (_e = document.getElementById("btn-delete-active")) === null || _e === void 0 ? void 0 : _e.classList.remove("btn-active");
    }
    if (checkedCount == dataEmployess.length) {
        document.getElementById("inp-check-box").checked = true;
    }
    else {
        document.getElementById("inp-check-box").checked = false;
    }
}
function handleSearchBox() {
    var searchArr = [];
    var searchValue = document.getElementById("search-input").value;
    dataEmployess.map(function (val) {
        if (searchValue === val.user.toUpperCase().slice(0, searchValue.length) ||
            searchValue === val.user.toLowerCase().slice(0, searchValue.length)) {
            searchArr.push(val);
        }
    });
    displayTable(searchArr);
}
function removeDuplicates(data) {
    var uniqueArray = [];
    data.forEach(function (item) {
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
}
function handleFilterDept() {
    var deptData = [];
    dataEmployess.map(function (ele) {
        deptData.push(ele.department);
    });
    var deptNewData = removeDuplicates(deptData);
    var deptDropDown = "";
    deptNewData.map(function (d) {
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
    var locNewData = removeDuplicates(loc);
    locNewData.map(function (d) {
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
function enableFilter(currEvent, event) {
    event.stopPropagation();
    currEvent.checked ? (ifAnySelected += 1) : (ifAnySelected -= 1);
    if (ifAnySelected > 0) {
        document.getElementById("btn-reset-filter").style.opacity = "1";
        document.getElementById("btn-filter-apply").style.backgroundColor = "red";
    }
    else {
        document.getElementById("btn-filter-apply").style.backgroundColor =
            "#f89191";
        document.getElementById("btn-reset-filter").style.opacity = "0.6";
    }
}
function getCheckedCountLoc(currEvent, event) {
    event.stopPropagation();
    currEvent.checked ? (locCount += 1) : (locCount -= 1);
    document.getElementById("no-of-checks-loc").innerText =
        locCount === 0 ? "" : "(".concat(locCount, ")");
}
function getCheckedCountDept(currEvent, event) {
    event.stopPropagation();
    currEvent.checked ? (deptCount += 1) : (deptCount -= 1);
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
