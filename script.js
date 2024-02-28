dataEmployess = [];
isNavHidden = true;
const alphabetsFiltered = [];
let isAscending = true;
let locCount = 0;
let deptCount = 0;
let statusCount = 0;
const locationOptions = document.getElementById("options-body-loc").classList;
const departmentOptions = document.getElementById("options-body").classList;
const statusOptions = document.getElementById("options-body-status").classList;

async function fetchData(data) {
  let response = await (await fetch("./data1.json")).json();
  response = response.concat(data);
  dataEmployess = response;
  console.log(dataEmployess)
  displayTable(response);
}

//checking the data from th local storage adn adding it to the main data
function checkPreviousData() {
  let newdata = localStorage.getItem("addData");
  if (newdata) {
    newdata = JSON.parse(newdata);
    return newdata;
  } else {
    return [];
  }
}
//initially loading the options in filter section 
async function LoadEmployeePage() {
  await fetchData(checkPreviousData());
  handleFilterLoc();
  handleFilterDept();
  handleFilterStatus();
}

//hiding the nav-bar when user clicks on the icon
function hideNavBar() {
  document.querySelector(".vertical-page").classList.toggle("w-100");
  document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
  document.getElementById("hide-install-box").classList.toggle("hide-install");
  document.getElementById("nav-hide-logo").classList.toggle("trim-logo");
  let x = document.getElementsByClassName("nav-text");
  let y = document.getElementsByClassName("nav-text-vh");
  y[0].classList.add("hide-vh");
  y[1].classList.add("hide-vh");
  let i;
  if (isNavHidden) {
    isNavHidden = false;
    for (i = 0; i < x.length; i++) {
      x[i].className += " hide-text";
    }
  } else {
    y[0].classList.remove("hide-vh");
    y[1].classList.remove("hide-vh");
    isNavHidden = true;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("hide-text");
    }
  }

  document.getElementById("close-btn").classList.toggle("rotate-arrow");
}
function displayAlphabets() {
  let alpha = "";
  for (let i = 65; i < 91; i++) {
    alpha += `<span id=${i}  class="activate-icon" onclick="handleClickFilter(${i})">${String.fromCharCode(
      i
    )}</span>`;
  }
  document.getElementById("demo").innerHTML = alpha;
}
function displayTable(dataEmployess) {
  let rows_tr = "";
  dataEmployess.map(function (ele, index) {
    rows_tr += ` <tr id="${index}">
   <td><input type="checkbox"  class="inp-check" id="check-${index}" onclick="handleSingleCheckbox(this,${index})" /></td>
   <td>
     <div class="table-user-info d-flex align-items-center" id="user-profile">
         <img src="${ele.imgSrc}" alt="">
       <div class="name-email" >
         <span>${ele.user.toUpperCase()}</span><br /><span class="e-mail">${ele.user.split(" ")[0]
      }@tezo.com</span>
       </div>
     </div>
   </td>
   <td>${ele.location}</td>
   <td>${ele.department}</td>
   <td>${ele.role}</td>
   <td>${ele.empId.slice(0, 8)}</td>
   <td><span id="status-bg">${ele.status === true ? "Active" : "Inactive"}</span></td>
   <td>${ele.joinDate}</td>
   <td class="c-p"> <span onclick="handleEllipsis(event,${index})">...</span> <div class="d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis" id="ellipsis-table-${index}" >
                                                                       <span class="c-p">View Details</span>
                                                               <span class="c-p" onclick="handleEditEmp(${index})">   Edit</span>
                                                                <span class= "c-p"  onclick="handleDelete(${index})">Delete</span>
                                                      </div>
 </td>
   </tr>`;
  });

  document.getElementById("employee-table").innerHTML = rows_tr;
}

function handleClickFilter(ascciiValue) {
  const char = document.getElementById(ascciiValue).innerText;
  const charClassList = document.getElementById(ascciiValue).classList;
  if (charClassList.contains("active")) {
    charClassList.remove("active");
    filterdArr = alphabetsFiltered.filter((i) =>
      i.user.toUpperCase().startsWith(char)
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
      if (val.user.toUpperCase().startsWith(char)) {
        isFound = true;
        alphabetsFiltered.push(val);
      }
    });
    if (!isFound) {
      alert("No data Available");
    } else {
      charClassList.toggle("active");
      displayTable([...new Set(alphabetsFiltered)]);
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
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter.svg";
  } else {
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg";
  }
}

function sorting(column) {
  if (column == 1) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.user < b.user) return isAscending ? -1 : 1;
      if (a.user > b.user) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 2) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.location < b.location) return isAscending ? -1 : 1;
      if (a.location > b.location) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 3) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.department < b.department) return isAscending ? -1 : 1;
      if (a.department > b.department) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 4) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.role < b.role) return isAscending ? -1 : 1;
      if (a.role > b.role) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 5) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.empId < b.empId) return isAscending ? -1 : 1;
      if (a.empId > b.empId) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 6) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.status < b.status) return isAscending ? -1 : 1;
      if (a.status > b.status) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }

  if (column == 7) {
    isAscending = !isAscending;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.joinDate < b.joinDate) return isAscending ? -1 : 1;
      if (a.joinDate > b.joinDate) return isAscending ? 1 : -1;
      return 0;
    });

    displayTable(sortedData);
  }
}

function handleDelete(rowNumber) {
  if (rowNumber != undefined) {
    console.log(rowNumber)
    dataEmployess.splice(rowNumber, 1);
    displayTable(dataEmployess);
  }
  let cnt = 0;
  const checkboxes = document.getElementsByClassName("inp-check");
  for (var x of checkboxes) {
    if (x.classList.contains("checkbox-active")) {
      cnt += 1;
    }
  }
  if (cnt == dataEmployess.length) {
    dataEmployess = [];
    displayTable(dataEmployess);
  }
  else {
    for (var x of checkboxes) {
      if (x.classList.contains("checkbox-active")) {
        cnt += 1;
        let remove_id = x.id.split("-")[1];
        s-=1;
        delete dataEmployess[remove_id];
      }
    }
    displayTable(dataEmployess);
  }
  document.getElementById("btn-delete-active").classList.remove("btn-active");
}
let s = 0;
function handleCheckBox(checkbox) {

  if (checkbox.checked == true) {
    s = dataEmployess.length;
    document.getElementById("btn-delete-active").classList.add("btn-active");
    const checkboxes = document.getElementsByClassName("inp-check");
    for (var x of checkboxes) {
      x.classList.add("checkbox-active");
      x.checked = true;
    }
  } else {
    s = 0;
    document.getElementById("btn-delete-active").classList.remove("btn-active");
    const checkboxes = document.getElementsByClassName("inp-check");
    for (var x of checkboxes) {
      x.classList.remove("checkbox-active");
      x.checked = false;
    }
  }
}

function handleSingleCheckbox(e, index) {
  if (document
    .getElementById(`check-${index}`)
    .classList.contains("checkbox-active")
  ) {
    document
      .getElementById(`check-${index}`)
      .classList.remove("checkbox-active");
  } else {
    document.getElementById(`check-${index}`).classList.add("checkbox-active");
  }
  e.checked ? (s += 1) : (s -= 1);
  if (s > 0) {
    document.getElementById("btn-delete-active").classList.add("btn-active");
  } else {
    document.getElementById("btn-delete-active").classList.remove("btn-active");
  }
  if (s == dataEmployess.length) {
    document.getElementById("inp-check-box").checked = true;
  } else {
    document.getElementById("inp-check-box").checked = false;
  }
}
function handleSearchBox() {
  const searchArr = [];
  const searchValue = document.getElementById("search-input").value;
  dataEmployess.map((val, idx) => {
    if (
      val.user.toUpperCase().startsWith(searchValue) ||
      val.user.toLowerCase().startsWith(searchValue)
    ) {
      searchArr.push(val);
    }
  });
  displayTable(searchArr);
}

function handleFilterDept() {
  let deptData = [];
  dataEmployess.map((ele) => {
    deptData.push(ele.department);
  });
  deptData = [...new Set(deptData)];
  let deptDropDown = "";
  deptData.map((d) => {
    deptDropDown += `
    <div class="d-flex jc-space-btwn p-3" onclick="enableFilter(this,event)">
    <div>
            <span >${d}</span>
    </div>
    <div >
        <input type="checkbox"  class="check-boxes"  onclick="enableFilter(this,event);getCheckedCountDept(this,event)"      name="${d}" id="">
    </div>
  </div>`;
  });

  document.getElementById("options-body").innerHTML = deptDropDown;
}
function handleFilterLoc() {
  let locDropDown = "";
  let loc = [];
  dataEmployess.map((ele) => {
    loc.push(ele.location);
  });
  loc = [...new Set(loc)];

  loc.map((d) => {
    locDropDown += `<div class="d-flex jc-space-btwn p-3" onclick="enableFilter(this,event)">
    <div>
            <span >${d}</span>
    </div>
    <div >
        <input type="checkbox" class="check-boxes-loc" onclick="enableFilter(this,event);getCheckedCountLoc(this,event);"   name="${d}" id="">
    </div>
  </div>`;
  });
  document.getElementById("options-body-loc").innerHTML = locDropDown;
}
function handleFilterStatus() {
  let statusDropDown = "";
  const statusArray = [
    {
      status: "Active",
    },
    {
      status: "Inactive",
    },
  ];
  statusArray.map((d) => {
    statusDropDown += ` <div class="d-flex jc-space-btwn p-3" onclick="enableFilter(this,event)">
    
    <div >
            <span >${d.status}</span>
    </div>
    <div >
        <input type="checkbox" class="check-boxes-status"   onclick="enableFilter(this,event);getCheckedCountStatus(this,event);"  name="${d.status}" id="">
    </div>
  </div>`;
  });
  document.getElementById("options-body-status").innerHTML = statusDropDown;
}

function handleLoc(event) {
  event.stopPropagation();
  locationOptions.toggle("d-none");
  if (!departmentOptions.contains("d-none")) {
    departmentOptions.toggle("d-none");
  }
  if (!statusOptions.contains("d-none")) {
    statusOptions.toggle("d-none");
  }
}
function handleDpt(event) {
  event.stopPropagation();
  departmentOptions.toggle("d-none");
  if (!statusOptions.contains("d-none")) {
    statusOptions.toggle("d-none");
  }
  if (!locationOptions.contains("d-none")) {
    locationOptions.toggle("d-none");
  }
}
function handleStat(event) {
  event.stopPropagation();
  statusOptions.toggle("d-none");
  if (!locationOptions.contains("d-none")) {
    locationOptions.toggle("d-none");
  }
  if (!departmentOptions.contains("d-none")) {
    departmentOptions.toggle("d-none");
  }
}

function handleAssignDropDown(event) {
  event.stopPropagation();
  document.getElementById("add-roles").classList.toggle("d-none");
}

let value = 0;
function enableFilter(a, event) {
  event.stopPropagation()
  a.checked ? (value += 1) : (value -= 1);
  if (value > 0) {
    document.getElementById("btn-reset-filter").style.opacity = 1;
    document.getElementById("btn-filter-apply").style.backgroundColor = "red";
  } else {
    document.getElementById("btn-filter-apply").style.backgroundColor =
      "#f89191";
    document.getElementById("btn-reset-filter").style.opacity = 0.6;
  }
}

function getCheckedCountLoc(ele, event) {
  event.stopPropagation();
  ele.checked ? (locCount += 1) : (locCount -= 1);
  document.getElementById("no-of-checks-loc").innerText =
    locCount === 0 ? "" : `(${locCount})`;
}

function getCheckedCountDept(ele, event) {
  event.stopPropagation();
  ele.checked ? (deptCount += 1) : (deptCount -= 1);
  document.getElementById("no-of-checks-dept").innerText =
    deptCount === 0 ? "" : `(${deptCount})`;
}

function getCheckedCountStatus(ele, event) {
  event.stopPropagation()
  ele.checked ? (statusCount += 1) : (statusCount -= 1);
  document.getElementById("no-of-checks-status").innerText =
    statusCount === 0 ? "" : `(${statusCount})`;
}

const handleFilterApply = () => {

  //closing the select tags if they are open in filter section
  if (!locationOptions.contains("d-none")) {
    locationOptions.toggle("d-none");
  }
  if (!departmentOptions.contains("d-none")) {
    departmentOptions.toggle("d-none");
  }
  if (!statusOptions.contains("d-none")) {
    statusOptions.toggle("d-none");
  }

  //pushing into the array which are checked and to be filtered
  let selectedDept = [];
  let selectedLoc = [];
  let selectedStatus = [];
  let checkboxArray = document.getElementsByClassName("check-boxes");
  let checkboxStatusArray = document.getElementsByClassName("check-boxes-status");
  let checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
  for (let cb of checkboxArray) {
    if (cb.checked == true) {
      selectedDept.push(cb.name);
    }
  }
  for (let cb of checkboxLocArray) {
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
  let filteredArray = dataEmployess.filter(element => {
    if (selectedStatus.length > 0 && !selectedStatus.includes(element.status)) {
      return false;
    }
    if (selectedDept.length > 0 && !selectedDept.includes(element.department)) {
      return false;
    }
    if (selectedLoc.length > 0 && !selectedLoc.includes(element.location)) {
      return false;
    }
    return true;
  });

  displayTable(filteredArray);
};

const tableToCSV = () => {
  let csvData = [];
  let rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let cols = document.querySelectorAll("td,th");
    let csvRow = [];
    for (let j = 0; j < cols.length; j++) {
      csvRow.push(cols[j].innerText);
    }
    csvData.push(csvRow.join(","));
    break;
  }

  csvData.join("\n");
  csvFile = new Blob([csvData], { type: "text/csv" });
  let tmp = document.createElement("a");
  tmp.download = "Data.csv";
  let url = window.URL.createObjectURL(csvFile);
  tmp.href = url;
  tmp.style.display = "none";
  document.body.appendChild(tmp);
  tmp.click();
  document.body.removeChild(tmp);
};

const handleEllipsis = (event, id) => {
  event.stopPropagation();
  const ellipsisArray = document.getElementsByClassName("ellipsis");
  for (let i = 0; i < ellipsisArray.length; i++) {
    if (i != id && !ellipsisArray[i].classList.contains("d-none")) {
      ellipsisArray[i].classList.toggle("d-none");
    }
  }
  document.getElementById(`ellipsis-table-${id}`).classList.toggle("d-none");
};

const handleFilterReset = () => {
  locCount = 0;
  statusCount = 0;
  deptCount = 0;
  document.getElementById("no-of-checks-loc").innerText = "";
  document.getElementById("no-of-checks-dept").innerText = "";
  document.getElementById("no-of-checks-status").innerText = "";
  if (!locationOptions.contains("d-none")) {
    locationOptions.toggle("d-none");
  }
  if (!departmentOptions.contains("d-none")) {
    departmentOptions.toggle("d-none");
  }
  if (!statusOptions.contains("d-none")) {
    statusOptions.toggle("d-none");
  }
  let checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
  for (let cb of checkboxLocArray) {
    if (cb.checked == true) {
      cb.checked = false;
    }
  }
  let checkboxArray = document.getElementsByClassName("check-boxes");
  for (let cb of checkboxArray) {
    if (cb.checked == true) {
      cb.checked = false;
    }
  }
  let checkboxStatusArray =
    document.getElementsByClassName("check-boxes-status");
  let selectedStatus = [];
  if (checkboxStatusArray[0].checked == true) {
    checkboxStatusArray[0].checked = false;
  }
  if (checkboxStatusArray[1].checked == true) {
    checkboxStatusArray[1].checked = false;
  }
  document.getElementById("btn-filter-apply").style.backgroundColor = "#f89191";
  document.getElementById("btn-reset-filter").style.opacity = 0.6;
  // alphabetsFiltered.length > 0 ? displayTable(alphabetsFiltered) : displayTable(dataEmployess);
  displayTable(dataEmployess);
};

document.getElementById("body").addEventListener("click", () => {
  if (!locationOptions.contains("d-none")) {
    locationOptions.toggle("d-none");
  }
  if (!departmentOptions.contains("d-none")) {
    departmentOptions.toggle("d-none");
  }
  if (!statusOptions.contains("d-none")) {
    statusOptions.toggle("d-none");
  }
  const ellipsisArray = document.getElementsByClassName("ellipsis");
  for (let i = 0; i < ellipsisArray.length; i++) {
    if (!ellipsisArray[i].classList.contains("d-none")) {
      ellipsisArray[i].classList.toggle("d-none");
    }
  }
});

const handleEditEmp = (idx) => {
  localStorage.setItem("updateEmp", JSON.stringify(dataEmployess[idx]));
  window.location.href = "./addEmp.html";
};
const handleAddEmployee = () => {
  localStorage.removeItem("updateEmp");
  window.location.href = "./addEmp.html"
}


displayAlphabets();
