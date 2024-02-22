dataEmployess = [];
async function fetchData(data) {
  let response = await (await fetch("./data1.json")).json();
  response = response.concat(data);
  dataEmployess = response;
  tableDisplay(response);
}

function checkPreviousData() {
  let newdata = localStorage.getItem("addData");
  if (newdata) {
    newdata = JSON.parse(newdata);
    return newdata;
  } else {
    return [];
  }
}
async function EmployeePageLoad() {
  await fetchData(checkPreviousData());
  handleFilterLoc();
  handleFilterDept();
  handleFilterStatus();
}

navHidden = true;
function hideNavBar() {
  document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
  document.getElementById("hide-install-box").classList.toggle("hide-install");
  document.getElementById("nav-hide-logo").classList.toggle("trim-logo");
  let x = document.getElementsByClassName("nav-text");
  let y = document.getElementsByClassName("nav-text-vh");
  y[0].classList.add("hide-vh");
  y[1].classList.add("hide-vh");
  let i;
  if (navHidden) {
    navHidden = false;
    for (i = 0; i < x.length; i++) {
      x[i].className += " hide-text";
    }
  } else {
    y[0].classList.remove("hide-vh");
    y[1].classList.remove("hide-vh");
    navHidden = true;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("hide-text");
    }
  }

  document.getElementById("close-btn").classList.toggle("rotate-arrow");
}
function alphabetsDisplay() {
  let alpha = "";
  for (let i = 65; i < 91; i++) {
    alpha += `<span id=${i}  class="activate-icon" onclick="handleClickFilter(${i})">${String.fromCharCode(
      i
    )}</span>`;
  }
  document.getElementById("demo").innerHTML = alpha;
}
function tableDisplay(dataEmployess) {
  let imgData = JSON.parse(localStorage.getItem("addData"));
  console.log(imgData[0].img)
  imgData = JSON.parse(imgData);
  let rows_tr = "";
  dataEmployess.map(function (ele, index) {
    rows_tr += ` <tr id="${index}">
   <td><input type="checkbox"  class="inp-check" id="check-${index}" onclick="handleSingleCheckbox(this,${index})" /></td>
   <td>
     <div class="table-user-info d-flex align-items-center" id="user-profile">
         <img src="./assets/user-table.jpg" alt="">
       <div class="name-email" >
         <span>${ele.USER.toUpperCase()}</span><br /><span class="e-mail">${ele.USER.split(" ")[0]}@tezo.com</span>
       </div>
     </div>
   </td>
   <td>${ele.LOCATION}</td>
   <td>${ele.DEPARTMENT}</td>
   <td>${ele.ROLE}</td>
   <td>${ele.EMPNO.slice(0, 8)}</td>
   <td><span id="status-bg">${
     ele.STATUS === true ? "Active" : "Inactive"
   }</span></td>
   <td>${ele.JOINDT}</td>
   <td class="c-p"  > <span onclick="handleEllipsis(this,${index})">...</span> <div class="d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis" id="ellipsis-table-${index}" >
                                                                <span class="td-none c-p">Add Details</span>
                                                                <a href="#"   class="td-none c-p" onclick="handleEditEmp(${index})"> <span>Edit</span></a>
                                                                <span class="td-none c-p"  onclick="handleDelete(${index})">Delete</span>
                                                      </div>
 </td>
   </tr>`;
  });

  document.getElementById("employee-table").innerHTML = rows_tr;
 
}
const arr = [];

function handleClickFilter(a) {
  if (document.getElementById(a).classList.contains("active")) {
    document.getElementById(a).classList.remove("active");

    filterdArr = arr.filter((i) =>
      i.USER.toUpperCase().startsWith(document.getElementById(a).innerText)
    );
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < filterdArr.length; j++) {
        if (arr[i].USER == filterdArr[j].USER) {
          arr.splice(i, 1);
        }
      }
    }
    tableDisplay(arr.length == 0 ? dataEmployess : arr);
  } else {
    let found = false;
    const char = document.getElementById(a).innerText;
    dataEmployess.map((val, idx) => {
      if (val.USER.toUpperCase().startsWith(char)) {
        found = true;
        arr.push(val);
      }
    });
    if (!found) {
      alert("No data Available");
    } else {
      document.getElementById(a).classList.toggle("active");
      tableDisplay([...new Set(arr)]);
    }
  }
  let active = false;
  let alphabetsArray = document.getElementsByClassName("activate-icon");
  for (let i = 0; i < alphabetsArray.length; i++) {
    if (alphabetsArray[i].classList.contains("active")) {
      active = true;
    }
  }
  if (active) {
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter.svg";
  } else {
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg";
  }
}

let asc = true;
function handleSortingUser() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    if (arr.length > 0) {
      const sortedData = [...arr].sort(function (a, b) {
        if (a.USER < b.USER) {
          return -1;
        }
        if (a.USER > b.USER) {
          return 1;
        }
        return 0;
      });

      tableDisplay(sortedData);
    } else if (deptArray.length > 0) {
      const sortedData = [...deptArray].sort(function (a, b) {
        if (a.USER < b.USER) {
          return -1;
        }
        if (a.USER > b.USER) {
          return 1;
        }
        return 0;
      });

      tableDisplay(sortedData);
    } else if (arr.length == 0 && deptArray.length == 0) {
      const sortedData = [...dataEmployess].sort(function (a, b) {
        if (a.USER < b.USER) {
          return -1;
        }
        if (a.USER > b.USER) {
          return 1;
        }
        return 0;
      });

      tableDisplay(sortedData);
    }
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.USER > b.USER) {
        return -1;
      }
      if (a.USER < b.USER) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}
function handleSortingLoc() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.LOCATION < b.LOCATION) {
        return -1;
      }
      if (a.LOCATION > b.LOCATION) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.LOCATION > b.LOCATION) {
        return -1;
      }
      if (a.LOCATION < b.LOCATION) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}
function handleSortingDep() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.DEPARTMENT < b.DEPARTMENT) {
        return -1;
      }
      if (a.DEPARTMENT > b.DEPARTMENT) {
        return 1;
      }
      return 0;
    });
    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.DEPARTMENT > b.DEPARTMENT) {
        return -1;
      }
      if (a.DEPARTMENT < b.DEPARTMENT) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}
function handleSortingRole() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.ROLE < b.ROLE) {
        return -1;
      }
      if (a.ROLE > b.ROLE) {
        return 1;
      }
      return 0;
    });
    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.ROLE > b.ROLE) {
        return -1;
      }
      if (a.ROLE < b.ROLE) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}
function handleSortingEmp() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.EMPNO < b.EMPNO) {
        return -1;
      }
      if (a.EMPNO > b.EMPNO) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.EMPNO > b.EMPNO) {
        return -1;
      }
      if (a.EMPNO < b.EMPNO) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}
function handleSortingStatus() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.STATUS < b.STATUS) {
        return -1;
      }
      if (a.STATUS > b.STATUS) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.STATUS > b.STATUS) {
        return -1;
      }
      if (a.STATUS < b.STATUS) {
        return 1;
      }
      return 0;
    });
    tableDisplay(sortedData);
  }
}
function handleSortingJoin() {
  document.getElementById("employee-table").innerHTML = ``;
  if (asc) {
    asc = false;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.JOINDT < b.JOINDT) {
        return -1;
      }
      if (a.JOINDT > b.JOINDT) {
        return 1;
      }
      return 0;
    });
    tableDisplay(sortedData);
  } else {
    asc = true;
    document.getElementById("employee-table").innerHTML = ``;
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.JOINDT > b.JOINDT) {
        return -1;
      }
      if (a.JOINDT < b.JOINDT) {
        return 1;
      }
      return 0;
    });

    tableDisplay(sortedData);
  }
}

function handleDelete(rowNumber) {
  if(rowNumber!=undefined){
    dataEmployess.splice(rowNumber,1);
    tableDisplay(dataEmployess)
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
    tableDisplay(dataEmployess);
  } else {
    for (var x of checkboxes) {
      if (x.classList.contains("checkbox-active")) {
        cnt += 1;
        let remove_id = x.id.split("-")[1];
        delete dataEmployess[remove_id];
      }
    } 
    tableDisplay(dataEmployess);
  }
  document.getElementById("btn-delete-active").classList.remove("btn-active");

 
}
let s = 0;
let allDeleteBtn = false;
function handleCheckBox(checkbox) {
  if (checkbox.checked == true) {
    s = dataEmployess.length;
    allDeleteBtn = true;
    document.getElementById("btn-delete-active").classList.add("btn-active");
    const checkboxes = document.getElementsByClassName("inp-check");
    for (var x of checkboxes) {
      x.classList.add("checkbox-active");
      x.checked = true;
    }
  } else {
    s = 0;
    allDeleteBtn = false;
    document.getElementById("btn-delete-active").classList.remove("btn-active");
    const checkboxes = document.getElementsByClassName("inp-check");
    for (var x of checkboxes) {
      x.classList.remove("checkbox-active");
      x.checked = false;
    }
  }
} 

function handleSingleCheckbox(e, index) {

if(  document.getElementById(`check-${index}`).classList.contains("checkbox-active")){
    document.getElementById(`check-${index}`).classList.remove("checkbox-active")
}
else{
  document.getElementById(`check-${index}`).classList.add("checkbox-active");
}
  e.checked ? (s += 1) : (s -= 1);
  console.log(s);
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
    if (val.USER.toUpperCase().startsWith(searchValue)) {
      found = true;
      searchArr.push(val);
    }
  });
  tableDisplay(searchArr);
}

function handleFilterDept() {
  let deptData = [];
  dataEmployess.map((ele) => {
    deptData.push(ele.DEPARTMENT);
  });
  deptData = [...new Set(deptData)];
  let deptDropDown = "";
  deptData.map((d) => {
    deptDropDown += `
    <div class="d-flex jc-space-btwn p-3">
    <div>
            <span >${d}</span>
    </div>
    <div >
        <input type="checkbox"  class="check-boxes"  onclick="enableFilter(this);getCheckedCountDept(this)"      name="${d}" id="">
    </div>
  </div>`;
  });

  document.getElementById("options-body").innerHTML = deptDropDown;
}
function handleFilterLoc() {
  let locDropDown = "";
  let loc = [];
  dataEmployess.map((ele) => {
    loc.push(ele.LOCATION);
  });
  loc = [...new Set(loc)];

  loc.map((d) => {
    locDropDown += `<div class="d-flex jc-space-btwn p-3">
    <div>
            <span >${d}</span>
    </div>
    <div >
        <input type="checkbox" class="check-boxes-loc" onclick="enableFilter(this);getCheckedCountLoc(this);"   name="${d}" id="">
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
    statusDropDown += ` <div class="d-flex jc-space-btwn p-3">
    <div>
            <span >${d.status}</span>
    </div>
    <div >
        <input type="checkbox" class="check-boxes-status"   onclick="enableFilter(this);getCheckedCountStatus(this);"  onclick=""  name="${d.status}" id="">
    </div>
  </div>`;
  });
  document.getElementById("options-body-status").innerHTML = statusDropDown;
}

let deptChecked = false;
let locChecked = false;
let statusChecked = false;
function handleLoc() {
  document.getElementById("options-body-loc").classList.toggle("d-none");
  if (!document.getElementById("options-body").classList.contains("d-none")) {
    document.getElementById("options-body").classList.toggle("d-none");
  }
  if (
    !document.getElementById("options-body-status").classList.contains("d-none")
  ) {
    document.getElementById("options-body-status").classList.toggle("d-none");
  }
}
function handleDpt() {
  document.getElementById("options-body").classList.toggle("d-none");
  if (
    !document.getElementById("options-body-status").classList.contains("d-none")
  ) {
    document.getElementById("options-body-status").classList.toggle("d-none");
  }
  if (
    !document.getElementById("options-body-loc").classList.contains("d-none")
  ) {
    document.getElementById("options-body-loc").classList.toggle("d-none");
  }
}
function handleStat() {
  document.getElementById("options-body-status").classList.toggle("d-none");
  if (
    !document.getElementById("options-body-loc").classList.contains("d-none")
  ) {
    document.getElementById("options-body-loc").classList.toggle("d-none");
  }
  if (!document.getElementById("options-body").classList.contains("d-none")) {
    document.getElementById("options-body").classList.toggle("d-none");
  }
}

let value = 0;
function enableFilter(a) {
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

let locCount = 0;
function getCheckedCountLoc(ele) {
  ele.checked ? (locCount += 1) : (locCount -= 1);
  document.getElementById("no-of-checks-loc").innerText =
    locCount === 0 ? "" : `(${locCount})`;
}
let deptCount = 0;
function getCheckedCountDept(ele) {
  ele.checked ? (deptCount += 1) : (deptCount -= 1);
  document.getElementById("no-of-checks-dept").innerText =
    deptCount === 0 ? "" : `(${deptCount})`;
}
let statusCount = 0;
function getCheckedCountStatus(ele) {
  ele.checked ? (statusCount += 1) : (statusCount -= 1);
  document.getElementById("no-of-checks-status").innerText =
    statusCount === 0 ? "" : `(${statusCount})`;
}

const deptArray = [];
const handleFilterApply = () => {
  if (
    !document.getElementById("options-body-loc").classList.contains("d-none")
  ) {
    document.getElementById("options-body-loc").classList.toggle("d-none");
  }
  if (!document.getElementById("options-body").classList.contains("d-none")) {
    document.getElementById("options-body").classList.toggle("d-none");
  }
  if (
    !document.getElementById("options-body-status").classList.contains("d-none")
  ) {
    document.getElementById("options-body-status").classList.toggle("d-none");
  }

  let selectedDept = [];
  let checkboxArray = document.getElementsByClassName("check-boxes");
  for (let cb of checkboxArray) {
    if (cb.checked == true) {
      selectedDept.push(cb.name);
    }
  }
  let selectedLoc = [];
  let checkboxLocArray = document.getElementsByClassName("check-boxes-loc");
  for (let cb of checkboxLocArray) {
    if (cb.checked == true) {
      selectedLoc.push(cb.name);
    }
  }
  let checkboxStatusArray =
    document.getElementsByClassName("check-boxes-status");
  let selectedStatus = [];
  if (checkboxStatusArray[0].checked == true) {
    selectedStatus.push(true);
  }
  if (checkboxStatusArray[1].checked == true) {
    selectedStatus.push(false);
  }

  if (
    selectedStatus.length > 0 &&
    selectedDept.length == 0 &&
    selectedLoc.length == 0
  ) {
    let statusArray = [];
    dataEmployess.forEach((element) => {
      if (selectedStatus.includes(element.STATUS)) {
        statusArray.push(element);
      }
    });
    tableDisplay(statusArray);
  }
  if (
    selectedStatus.length == 0 &&
    selectedDept.length > 0 &&
    selectedLoc.length == 0
  ) {
    let depArray = [];
    dataEmployess.forEach((element) => {
      if (selectedDept.includes(element.DEPARTMENT)) {
        depArray.push(element);
      }
    });
    console.log(depArray);
    tableDisplay(depArray);
  }
  if (
    selectedStatus.length == 0 &&
    selectedDept.length == 0 &&
    selectedLoc.length > 0
  ) {
    let locArray = [];
    dataEmployess.forEach((element) => {
      if (selectedLoc.includes(element.LOCATION)) {
        locArray.push(element);
      }
    });
    tableDisplay(locArray);
  }
  if (
    selectedStatus.length > 0 &&
    selectedDept.length > 0 &&
    selectedLoc.length == 0
  ) {
    let depArray = [];
    dataEmployess.forEach((element) => {
      if (
        selectedStatus.includes(element.STATUS) &&
        selectedDept.includes(element.DEPARTMENT)
      ) {
        depArray.push(element);
      }
    });
    console.log(depArray);
    tableDisplay(depArray);
  }
  if (
    selectedStatus.length > 0 &&
    selectedDept.length == 0 &&
    selectedLoc.length > 0
  ) {
    let depArray = [];
    dataEmployess.forEach((element) => {
      if (
        selectedStatus.includes(element.STATUS) &&
        selectedLoc.includes(element.LOCATION)
      ) {
        depArray.push(element);
      }
    });
    console.log(depArray);
    tableDisplay(depArray);
  }
  if (
    selectedStatus.length == 0 &&
    selectedDept.length > 0 &&
    selectedLoc.length > 0
  ) {
    let depArray = [];
    dataEmployess.forEach((element) => {
      if (
        selectedLoc.includes(element.LOCATION) &&
        selectedDept.includes(element.DEPARTMENT)
      ) {
        depArray.push(element);
      }
    });
    console.log(depArray);
    tableDisplay(depArray);
  } else if (
    selectedStatus.length > 0 &&
    selectedDept.length > 0 &&
    selectedLoc.length > 0
  ) {
    let filteredArray = [];
    dataEmployess.forEach((element) => {
      if (
        selectedStatus.includes(element.STATUS) &&
        selectedDept.includes(element.DEPARTMENT) &&
        selectedLoc.includes(element.LOCATION)
      ) {
        filteredArray.push(element);
      }
    });
    tableDisplay(filteredArray);
  }
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

const handleEllipsis = (c, id) => {
  const ellipsisArray = document.getElementsByClassName("ellipsis");
  for (let i = 0; i < ellipsisArray.length; i++) {
    if (
      i != id &&
      !document
        .getElementsByClassName("ellipsis")
        [i].classList.contains("d-none")
    ) {
      document.getElementsByClassName("ellipsis")[i].classList.toggle("d-none");
    }
  }

  document.getElementById(`ellipsis-table-${id}`).classList.toggle("d-none");
};

const handleFilterReset = () => {
  locCount=0;
  statusCount=0;
  deptCount=0;
  document.getElementById("no-of-checks-loc").innerText = "";
  document.getElementById("no-of-checks-dept").innerText = "";
  document.getElementById("no-of-checks-status").innerText = "";
  if (
    !document.getElementById("options-body-loc").classList.contains("d-none")
  ) {
    document.getElementById("options-body-loc").classList.toggle("d-none");
  }
  if (!document.getElementById("options-body").classList.contains("d-none")) {
    document.getElementById("options-body").classList.toggle("d-none");
  }
  if (
    !document.getElementById("options-body-status").classList.contains("d-none")
  ) {
    document.getElementById("options-body-status").classList.toggle("d-none");
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
  arr.length > 0 ? tableDisplay(arr) : tableDisplay(dataEmployess);
};

// document.getElementById("body").addEventListener("click",()=>{
//   if (!document.getElementById("options-body-loc").classList.contains("d-none")
//   ) {
//     document.getElementById("options-body-loc").classList.toggle("d-none");
//   }
//   if (!document.getElementById("options-body").classList.contains("d-none")) {
//     document.getElementById("options-body").classList.toggle("d-none");
//   }
//   if ( !document.getElementById("options-body-status").classList.contains("d-none")
//   ) {
//     document.getElementById("options-body-status").classList.toggle("d-none");
//   }

// })

const handleEditEmp=(idx)=>{
localStorage.setItem("updateEmp",JSON.stringify(dataEmployess[idx]));
window.location.href="./updateEmp.html";
}

alphabetsDisplay();
