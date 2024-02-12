dataEmployess = [];
async function fetchData(data) {
  let response = await (await fetch("./data1.json")).json();
  dataEmployess = response;
  response = response.concat(data);
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

fetchData(checkPreviousData());
navHidden = true;
function hideNavBar() {

  document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
  document.getElementById("hide-install-box").classList.toggle("hide-install");
  document.getElementById("nav-hide-logo").classList.toggle("trim-logo");
  // document.getElementById("nav-text").classList.add("hide-text");
  let x = document.getElementsByClassName("nav-text");
  let y = document.getElementsByClassName("nav-text-vh");
  y[0].classList.add("hide-vh")
  y[1].classList.add("hide-vh")
  let i;
  if (navHidden) {

    navHidden=false
    for (i = 0; i < x.length; i++) {
      x[i].className += " hide-text";
    }
  } 
  else{
    y[0].classList.remove("hide-vh")
    y[1].classList.remove("hide-vh")
    navHidden=true;
    for (i = 0; i < x.length; i++) {
     x[i].classList.remove("hide-text")
    }
  }

  // document.getElementsByClassName("nav-text").classList.add("hide-text");

  document.getElementById("close-btn").classList.toggle("rotate-arrow");
}
function alphabetsDisplay() {
  let alpha = "";
  for (let i = 65; i < 91; i++) {
    alpha += `<span id=${i} onclick="handleClickFilter(${i})">${String.fromCharCode(
      i
    )}</span>`;
  }
  document.getElementById("demo").innerHTML = alpha;
}
function tableDisplay(dataEmployess) {
  let rows_tr = "";
  dataEmployess.map(function (ele, index) {
    rows_tr += ` <tr id="${index}">
   <td><input type="checkbox"  class="inp-check" id="check-${index}" onclick="handleSingleCheckbox(this,${index})" /></td>
   <td>
     <div class="table-user-info d-flex" id="user-profile">
         <img src="./assets/user-table.jpg" alt="">
       <div class="name-email" >
         <span>${ele.USER.toUpperCase()}</span><br /><span class="e-mail">@tezo.com</span>
       </div>
     </div>
   </td>
   <td>${ele.LOCATION}</td>
   <td>${ele.DEPARTMENT}</td>
   <td>${ele.ROLE}</td>
   <td>${ele.EMPNO.slice(0, 5)}</td>
   <td><span>${ele.STATUS === true ? "Active" : "Inactive"}</span></td>
   <td>${ele.JOINDT}</td>
   <td>...</td>
   </tr>`;
  });
  document.getElementById("employee-table").innerHTML = rows_tr;
}
const arr = [];

function handleClickFilter(a) {
  if (document.getElementById(a).classList.contains("active")) {
    console.log(document.getElementById(a).innerText, "active");
    document.getElementById(a).classList.remove("active");

    filterdArr=arr.filter((i)=>i.USER.toUpperCase().startsWith(document.getElementById(a).innerText))
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<filterdArr.length;j++){
        if(arr[i].USER==filterdArr[j].USER){
          arr.splice(i,1);
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

function handleDelete() {
  let cnt = 0;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var x of checkboxes) {
    if (x.classList.contains("checkbox-active")) {
      cnt += 1;
      let remove_id = x.id.split("-")[1];
      dataEmployess.splice(remove_id, 1);
    }
  }

  if (allDeleteBtn && confirm("ALL DELETE???")) {
    dataEmployess = [];
    tableDisplay(dataEmployess);
  } else {
    if (confirm(`Delete ${cnt} records???`)) {
      tableDisplay(dataEmployess);
    }
  }
}
let allDeleteBtn = false;
function handleCheckBox(checkbox) {
  allDeleteBtn = true;
  if (checkbox.checked == true) {
    document.getElementById("btn-delete-active").classList.add("btn-active");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var x of checkboxes) {
      x.checked = true;
    }
  } else {
    document.getElementById("btn-delete-active").classList.remove("btn-active");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var x of checkboxes) {
      x.checked = false;
    }
  }
}
let s = 0;
function handleSingleCheckbox(e, index) {
  document.getElementById(`check-${index}`).classList.add("checkbox-active");
  e.checked ? (s += 1) : (s -= 1);
  if (s > 0 || allDeleteBtn) {
    document.getElementById("btn-delete-active").classList.add("btn-active");
  } else {
    document.getElementById("btn-delete-active").classList.remove("btn-active");
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
  const deptData = [
    {
      DEPARTMENT: "Support",
    },
    {
      DEPARTMENT: "Accounting",
    },
    {
      DEPARTMENT: "Business Development",
    },
    {
      DEPARTMENT: "IT",
    },
    {
      DEPARTMENT: "Research and Development",
    },
    {
      DEPARTMENT: "Engineering",
    },
    {
      DEPARTMENT: "Services",
    },
  ];
  let deptDropDown = "";
  deptData.map((d) => {
    deptDropDown += `<option value="${d.DEPARTMENT}">${d.DEPARTMENT}</option>`;
  });
  document.getElementById("filter-department").innerHTML = deptDropDown;
}

function handleFilterLoc() {
  let locDropDown = "";
  const loc = [
    {
      location: "Chennai",
    },
    {
      location: "Hyderabad",
    },
    {
      location: "Delhi",
    },
    {
      location: "Mumbai",
    },
    {
      location: "Pune",
    },
    {
      location: "Kashmir",
    },
    {
      location: "Kerala",
    },
  ];
  loc.map((d) => {
    locDropDown += `<option value="${d.location}">${d.location}</option>`;
  });
  document.getElementById("filter-loc").innerHTML = locDropDown;
}
const deptArray = [];
let applyBtn = false;
const handleFilterApply = () => {
  applyBtn = true;
  if (arr.length > 0) {
    const deptVal = document.getElementById("filter-department").value;
    const locVal = document.getElementById("filter-loc").value;
    arr.map((a) => {
      if (a.DEPARTMENT.match(deptVal) && a.LOCATION.match(locVal)) {
        deptArray.push(a);
      }
    });
  } else {
    const deptVal = document.getElementById("filter-department").value;
    const locVal = document.getElementById("filter-loc").value;
    dataEmployess.map((a) => {
      if (a.DEPARTMENT.match(deptVal) && a.LOCATION.match(locVal)) {
        deptArray.push(a);
      }
    });
  }

  tableDisplay(deptArray);
};

const tableToCSV=()=>{
  let csvData=[];
  let rows=document.getElementsByTagName('tr');
  for(let i=0;i<rows.length;i++){
    let cols=document.querySelectorAll('td,th')
    let csvRow=[];
    for(let j=0;j<cols.length;j++){
      csvRow.push(cols[j].innerText);
     
    }
    console.log(csvRow)
    csvData.push(csvRow.join(','))
  }
  console.log(csvData)
  csvData.join('\n');
  csvFile=new Blob([csvData],{type:"text/csv"});
  let tmp=document.createElement('a');
  tmp.download="Data.csv";
  let url=window.URL.createObjectURL(csvFile);
  tmp.href=url;
  tmp.style.display='none';
  document.body.appendChild(tmp)
  tmp.click()
  document.body.removeChild(tmp)
}

alphabetsDisplay();
