let dataEmployess: EmployeeData[] = [];
let response: EmployeeData[] = [];
let alphabetsFiltered: EmployeeData[] = [];
let isAscending = true;
let ifAnySelected = 0;
let checkedCount = 0;
let locCount = 0;
let deptCount = 0;
let statusCount = 0;
let locationOptions = document.getElementById("options-body-loc")?.classList;
let departmentOptions = document.getElementById("options-body")?.classList;
let statusOptions = document.getElementById("options-body-status")?.classList;

interface EmployeeData {
  user: string;
  location: string;
  department: string;
  role: string;
  empId: string;
  status: boolean;
  joinDate: string;
  imgSrc: string;
  email:string
}

enum EmployeeSortingCriteria {
  user = 1,
  location,
  department,
  role,
  empId,
  status,
  joinDate,
}

function fetchAndDisplayEmployeesData(data: EmployeeData[]) {
  response = response.concat(data);
  dataEmployess = response;
  displayTable(response);
}

function checkForStoredEmployeeData() {
  let newdata = localStorage.getItem("addData");
  if (newdata) {
    let newdataParsed: EmployeeData[] = JSON.parse(newdata);
    return newdataParsed;
  } else {
    return [];
  }
}

function initializeEmployeePage() {
  fetchAndDisplayEmployeesData(checkForStoredEmployeeData());
  handleLocationFilter();
  handleDepartmentFilter();
  handleStatusFilter();
}

 function displayAlphabetFilterButtons() {
  let alphabets = "";
  for (let i = 65; i < 91; i++) {
    alphabets += `<span id=${i}  class="activate-icon" onclick="handleAlphabetFilterClick(${i})">${String.fromCharCode(
      i
    )}</span>`;
  }

  document.getElementById("alphabets-display")!.innerHTML = alphabets;
}

function displayTable(dataEmployess: EmployeeData[]) {
  let rows_tr = "";
  dataEmployess.map(function (ele: EmployeeData, index: number) {
    rows_tr += ` <tr id="${index}">
   <td><input type="checkbox"  class="inp-check" id="check-${index}" onclick="handleIndividualCheckBox(this,${index})" /></td>
   <td>
     <div class="table-user-info d-flex align-items-center" id="user-profile">
         <img src="${ele.imgSrc}" alt="">
       <div class="name-email d-flex d-flex-col" >
         <span>${ele.user.toUpperCase()}</span><span class="e-mail">${ele.email}</span>
       </div>
     </div>
   </td>
   <td>${ele.location}</td>
   <td>${ele.department}</td>
   <td>${ele.role}</td>
   <td>${ele.empId.slice(0, 8)}</td>
   <td><span id="status-bg">Active</span></td>
   <td>${ele.joinDate}</td>
   <td class="c-p"> <span onclick="toggleEllipsisMenu(event,${index})">...</span> <div class="d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis" id="ellipsis-table-${index}" >
                                                                       <span class="c-p">View Details</span>
                                                               <span class="c-p" onclick="editEmployeeDetails(${index})">   Edit</span>
                                                                <span class= "c-p"  onclick="handleDeleteEmployee(${index})">Delete</span>
                                                      </div>
 </td>
   </tr>`;
  });

  document.getElementById("employee-table")!.innerHTML = rows_tr;
}

function handleAlphabetFilterClick(ascciiValue: string) {
  const char = document.getElementById(ascciiValue)!.innerText;
  const charClassList = document.getElementById(ascciiValue)?.classList;
  if (charClassList?.contains("active")) {
    charClassList.remove("active");
    let filterdArr = alphabetsFiltered.filter(
      (i) => i.user.toUpperCase()[0] === char
    );
    for (let i = 0; i < alphabetsFiltered.length; i++) {
      for (let j = 0; j < filterdArr.length; j++) {
        if (alphabetsFiltered[i].user == filterdArr[j].user) {
          alphabetsFiltered.splice(i, 1);
        }
      }
    }
    displayTable(
      alphabetsFiltered.length == 0 ? dataEmployess : alphabetsFiltered
    );
  } else {
    let isFound = false;
    dataEmployess.forEach((val) => {
      if (val.user.toUpperCase()[0] === char) {
        isFound = true;
        alphabetsFiltered.push(val);
      }
    });
    if (!isFound) {
      alert("No data Available");
    } else {
      charClassList?.toggle("active");
      displayTable([...alphabetsFiltered]);
    }
  }

  //for changing the filter icon color
  let isActive = false;
  let alphabetsArray = document.getElementsByClassName("activate-icon");
  for (let i = 0; i < alphabetsArray.length; i++) {
    if (alphabetsArray[i].classList.contains("active")) {
      isActive = true;
    }
  }
  if (isActive) {
    (document.getElementById("filter-icon") as HTMLImageElement).src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter.svg";
  } else {
    (document.getElementById("filter-icon") as HTMLImageElement).src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg";
  }
}

function sortEmployeeData(column: number) {
  if (EmployeeSortingCriteria.user === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.user < b.user) return isAscending ? -1 : 1;
      if (a.user > b.user) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.location === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.location < b.location) return isAscending ? -1 : 1;
      if (a.location > b.location) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.department === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.department < b.department) return isAscending ? -1 : 1;
      if (a.department > b.department) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.role === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.role < b.role) return isAscending ? -1 : 1;
      if (a.role > b.role) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.empId === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.empId < b.empId) return isAscending ? -1 : 1;
      if (a.empId > b.empId) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.status === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.status < b.status) return isAscending ? -1 : 1;
      if (a.status > b.status) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (EmployeeSortingCriteria.joinDate === column) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.joinDate < b.joinDate) return isAscending ? -1 : 1;
      if (a.joinDate > b.joinDate) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }
}

function deleteFromLocalStorage(row) {
  let lsd = JSON.parse(localStorage.getItem("addData"));
  lsd.splice(row,1)
  localStorage.setItem("addData",JSON.stringify(lsd))
}

function handleDeleteEmployee(rowNumber:number) {
  if (rowNumber != undefined) {
    dataEmployess.splice(rowNumber, 1);
    displayTable(dataEmployess);
  }
  let cnt = 0;
  const checkboxes = document.getElementsByClassName("inp-check") as HTMLCollectionOf<HTMLInputElement>;
  for (let i = 0; i < checkboxes.length; i++) {
    const singleCheckBoxItem = checkboxes[i];
    if (singleCheckBoxItem.classList.contains("checkbox-active")) {
      cnt += 1;
      let remove_id = singleCheckBoxItem.id.split("-")[1];
      deleteFromLocalStorage(remove_id);
      checkedCount -= 1;
      delete dataEmployess[remove_id];
    }
  }
  if (cnt == dataEmployess.length) {
    localStorage.removeItem("addData")
    dataEmployess = [];
  }
  displayTable(dataEmployess);
  document.getElementById("btn-delete-active")?.classList.remove("btn-active");
}

function handleSelectAllCheckBoxes(checkbox: HTMLInputElement) {
  if (checkbox.checked == true) {
    checkedCount = dataEmployess.length;
    document.getElementById("btn-delete-active")?.classList.add("btn-active");
    const checkboxes = document.getElementsByClassName(
      "inp-check"
    ) as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checkboxes.length; i++) {
      const singleCheckBoxItem = checkboxes[i];
      singleCheckBoxItem.classList.add("checkbox-active");
      singleCheckBoxItem.checked = true;
    }
  } else {
    checkedCount = 0;
    document
      .getElementById("btn-delete-active")
      ?.classList.remove("btn-active");
    const checkboxes = document.getElementsByClassName(
      "inp-check"
    ) as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checkboxes.length; i++) {
      const singleCheckBoxItem = checkboxes[i];
      singleCheckBoxItem.classList.remove("checkbox-active");
      singleCheckBoxItem.checked = false;
    }
  }
}

function handleIndividualCheckBox(currEvent: HTMLInputElement, index: number) {
  if (
    document
      .getElementById(`check-${index}`)
      ?.classList.contains("checkbox-active")
  ) {
    document
      .getElementById(`check-${index}`)
      ?.classList.remove("checkbox-active");
  } else {
    document.getElementById(`check-${index}`)?.classList.add("checkbox-active");
  }
  currEvent.checked ? (checkedCount += 1) : (checkedCount -= 1);
  if (checkedCount > 0) {
    document.getElementById("btn-delete-active")?.classList.add("btn-active");
  } else {
    document
      .getElementById("btn-delete-active")
      ?.classList.remove("btn-active");
  }
  if (checkedCount == dataEmployess.length) {
    (document.getElementById("inp-check-box") as HTMLInputElement).checked =
      true;
  } else {
    (document.getElementById("inp-check-box") as HTMLInputElement).checked =
      false;
  }
}

function handleEmployeeSearch() {
  const searchArr: EmployeeData[] = [];
  const searchValue = (
    document.getElementById("search-input") as HTMLInputElement
  ).value;
  dataEmployess.map((val) => {
    if (
      searchValue === val.user.toUpperCase().slice(0, searchValue.length) ||
      searchValue === val.user.toLowerCase().slice(0, searchValue.length)
    ) {
      searchArr.push(val);
    }
  });
  displayTable(searchArr);
}

function removeDuplicates(data: string[]) {
  let uniqueArray = [];
  data.forEach((item) => {
    if (uniqueArray.indexOf(item) === -1) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

function generateFilterDropdownOptions(data, id, className, clickHandler,clickHandlerForSelected) {
  let dropdown = "";
  data.map((d) => {
    dropdown += `
      <div class="d-flex jc-space-btwn p-3">
        <div class="w-5">
          <span>${d}</span>
        </div>
        <div>
          <input type="checkbox" class="${className}" onclick="${clickHandler}(this,event);${clickHandlerForSelected}(this,event)" name="${d}" id="">
        </div>
      </div>`;
  });
  document.getElementById(id)!.innerHTML = dropdown;
}

function handleDepartmentFilter() {
  const deptData = dataEmployess.map((ele) => ele.department);
  const deptNewData = removeDuplicates(deptData);
  generateFilterDropdownOptions(deptNewData, "options-body", "check-boxes", "handleEnableFilter","getSelectedDepartmentCount");
}

function handleLocationFilter() {
  const loc = dataEmployess.map((ele) => ele.location);
  const locNewData = removeDuplicates(loc);
  generateFilterDropdownOptions(locNewData, "options-body-loc", "check-boxes-loc", "handleEnableFilter","getSelectedLocationCount");
}

function handleStatusFilter() {
  const statusArray = ["Active", "Inactive"];
  generateFilterDropdownOptions(statusArray, "options-body-status", "check-boxes-status", "handleEnableFilter","getSelectedStatusCount");
}


function toggleLocationDropdown(event: Event) {
  event.stopPropagation();
  locationOptions?.toggle("d-none");
  if (!departmentOptions?.contains("d-none")) {
    departmentOptions?.toggle("d-none");
  }
  if (!statusOptions?.contains("d-none")) {
    statusOptions?.toggle("d-none");
  }
}

function toggleDepartmentDropdown(event: Event) {
  event.stopPropagation();
  departmentOptions?.toggle("d-none");
  if (!statusOptions?.contains("d-none")) {
    statusOptions?.toggle("d-none");
  }
  if (!locationOptions?.contains("d-none")) {
    locationOptions?.toggle("d-none");
  }
}

function toggleStatusDropdown(event: Event) {
  event.stopPropagation();
  statusOptions?.toggle("d-none");
  if (!locationOptions?.contains("d-none")) {
    locationOptions?.toggle("d-none");
  }
  if (!departmentOptions?.contains("d-none")) {
    departmentOptions?.toggle("d-none");
  }
}

function toggleAssignRoleDropdown(event: Event) {
  event.stopPropagation();
  document.getElementById("add-roles")?.classList.toggle("d-none");
}

function handleEnableFilter(currEvent: HTMLInputElement, event: Event) {
  event.stopPropagation();
  currEvent.checked ? (ifAnySelected += 1) : (ifAnySelected -= 1);
  if (ifAnySelected > 0) {
    document.getElementById("btn-reset-filter")!.style.opacity = "1";
    document.getElementById("btn-filter-apply")!.style.backgroundColor = "red";
  } else {
    document.getElementById("btn-filter-apply")!.style.backgroundColor =
      "#f89191";
    document.getElementById("btn-reset-filter")!.style.opacity = "0.6";
  }
}

function getSelectedLocationCount(currEvent: HTMLInputElement, event: Event) {
  event.stopPropagation();
  currEvent.checked ? (locCount += 1) : (locCount -= 1);
  document.getElementById("no-of-checks-loc")!.innerText =
    locCount === 0 ? "" : `(${locCount})`;
}

function getSelectedDepartmentCount(currEvent: HTMLInputElement, event: Event) {
  event.stopPropagation();
  currEvent.checked ? (deptCount += 1) : (deptCount -= 1);
  document.getElementById("no-of-checks-dept")!.innerText =
    deptCount === 0 ? "" : `(${deptCount})`;
}

function getSelectedStatusCount(ele: HTMLInputElement, event: Event) {
  event.stopPropagation();
  ele.checked ? (statusCount += 1) : (statusCount -= 1);
  document.getElementById("no-of-checks-status")!.innerText =
    statusCount === 0 ? "" : `(${statusCount})`;
}

const applyFiltersAndDisplayResults = () => {
  //closing the select tags if they are open in filter section
  if (!locationOptions?.contains("d-none")) {
    locationOptions?.toggle("d-none");
  }
  if (!departmentOptions?.contains("d-none")) {
    departmentOptions?.toggle("d-none");
  }
  if (!statusOptions?.contains("d-none")) {
    statusOptions?.toggle("d-none");
  }

  //pushing into the array which are checked and to be filtered
  let selectedDept: string[] = [];
  let selectedLoc: string[] = [];
  let selectedStatus: boolean[] = [];
  let checkboxArray = document.getElementsByClassName("check-boxes");
  let checkboxStatusArray =
    document.getElementsByClassName("check-boxes-status");
  let checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
  for (let i = 0; i < checkboxArray.length; i++) {
    const cb = checkboxArray[i];
    if ((cb as HTMLInputElement).checked == true) {
      selectedDept.push((cb as HTMLInputElement).name);
    }
  }
  for (let i = 0; i < checkboxLocArray.length; i++) {
    const cb = checkboxLocArray[i];
    if ((cb as HTMLInputElement).checked == true) {
      selectedLoc.push((cb as HTMLInputElement).name);
    }
  }
  if ((checkboxStatusArray[0] as HTMLInputElement).checked == true) {
    selectedStatus.push(true);
  }
  if ((checkboxStatusArray[1] as HTMLInputElement).checked == true) {
    selectedStatus.push(false);
  }
  //filtering into the new array
  let filteredArray = dataEmployess.filter((element) => {
    if (
      selectedStatus.length > 0 &&
      selectedStatus.indexOf(element.status) === -1
    ) {
      return false;
    }
    if (
      selectedDept.length > 0 &&
      selectedDept.indexOf(element.department) === -1
    ) {
      return false;
    }
    if (
      selectedLoc.length > 0 &&
      selectedLoc.indexOf(element.location) === -1
    ) {
      return false;
    }
    return true;
  });

  displayTable(filteredArray);
};

const exportTableDataToCSV = () => {
  let csvData: string[] = [];
  let rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let cols = rows[i].querySelectorAll("td,th");
    let csvRow: string[] = [];
    for (let j = 1; j < cols.length; j++) {
      csvRow.push((cols[j] as HTMLElement).innerText);
    }
    csvData.push(csvRow.join(","));
  }

  let csvString = csvData.join("\n");
  let csvFile = new Blob([csvString], { type: "text/csv" });
  let tmp = document.createElement("a");
  tmp.download = "EmployeeData.csv";
  let url = window.URL.createObjectURL(csvFile);
  tmp.href = url;
  tmp.style.display = "none";
  document.body.appendChild(tmp);
  tmp.click();
  document.body.removeChild(tmp);
};

const toggleEllipsisMenu = (event: Event, id: number) => {
  event.stopPropagation();
  const ellipsisArray = document.getElementsByClassName("ellipsis");
  for (let i = 0; i < ellipsisArray.length; i++) {
    if (i != id && !ellipsisArray[i].classList.contains("d-none")) {
      ellipsisArray[i].classList.toggle("d-none");
    }
  }
  document.getElementById(`ellipsis-table-${id}`)?.classList.toggle("d-none");
};

const resetFilterOptions = () => {
  locCount = 0;
  statusCount = 0;
  deptCount = 0;
  document.getElementById("no-of-checks-loc")!.innerText = "";
  document.getElementById("no-of-checks-dept")!.innerText = "";
  document.getElementById("no-of-checks-status")!.innerText = "";
  if (!locationOptions?.contains("d-none")) {
    locationOptions?.toggle("d-none");
  }
  if (!departmentOptions?.contains("d-none")) {
    departmentOptions?.toggle("d-none");
  }
  if (!statusOptions?.contains("d-none")) {
    statusOptions?.toggle("d-none");
  }
  let checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
  for (let i = 0; i < checkboxLocArray.length; i++) {
    const cb = checkboxLocArray[i];
    if ((cb as HTMLInputElement).checked == true) {
      (cb as HTMLInputElement).checked = false;
    }
  }
  let checkboxArray = document.getElementsByClassName("check-boxes");
  for (let i = 0; i < checkboxArray.length; i += 1) {
    const cb = checkboxArray[i];
    if ((cb as HTMLInputElement).checked == true) {
      (cb as HTMLInputElement).checked = false;
    }
  }
  let checkboxStatusArray =
    document.getElementsByClassName("check-boxes-status");
  if ((checkboxStatusArray[0] as HTMLInputElement).checked == true) {
    (checkboxStatusArray[0] as HTMLInputElement).checked = false;
  }
  if ((checkboxStatusArray[1] as HTMLInputElement).checked == true) {
    (checkboxStatusArray[1] as HTMLInputElement).checked = false;
  }
  document.getElementById("btn-filter-apply")!.style.backgroundColor =
    "#f89191";
  document.getElementById("btn-reset-filter")!.style.opacity = "0.6";
  displayTable(dataEmployess);
};

document.getElementById("body")?.addEventListener("click", () => {
  if (!locationOptions?.contains("d-none")) {
    locationOptions?.toggle("d-none");
  }
  if (!departmentOptions?.contains("d-none")) {
    departmentOptions?.toggle("d-none");
  }
  if (!statusOptions?.contains("d-none")) {
    statusOptions?.toggle("d-none");
  }
  const ellipsisArray = document.getElementsByClassName("ellipsis");
  for (let i = 0; i < ellipsisArray.length; i++) {
    if (!ellipsisArray[i].classList.contains("d-none")) {
      ellipsisArray[i].classList.toggle("d-none");
    }
  }
});

const editEmployeeDetails = (idx: number) => {
  localStorage.setItem("updateEmp", JSON.stringify(dataEmployess[idx]));
  window.location.href = "./addEmp.html";
};
const navigateToAddEmployeePage = () => {
  localStorage.removeItem("updateEmp");
  window.location.href = "./addEmp.html";
};

displayAlphabetFilterButtons();
