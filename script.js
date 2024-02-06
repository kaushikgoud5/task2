import dataEmployess from "./data1.json" assert { type: 'json' };
import deptData from  "./data2.json" assert {type:'json'};

function showDropDownEmployees() {
  document.getElementById("list-items-drop-down").classList.toggle("show");
  document.getElementById("arrow-right").classList.toggle("drop-arrow");
}
function hideNavBar() {
  document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
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
     <div class="table-user-info" id="user-profile">
         <img src="./assets/user-table.jpg" alt="">
       <div class="name-email" >
         <span>${ele.USER.toUpperCase()}</span><br /><span class="e-mail">${ele.USER.slice(
      0,
      5
    )}@tezo.com</span>
       </div>
     </div>
   </td>
   <td>${ele.LOCATION}</td>
   <td>${ele.DEPARTMENT}</td>
   <td>${ele.ROLE}</td>
   <td>${ele.EMPNO.slice(0, 8)}</td>
   <td><span>${ele.STATUS === true ? "Active" : "Inactive"}</span></td>
   <td>${ele.JOINDT.slice(0, 10)}</td>
   <td>...</td>
   </tr>`;
  });
  document.getElementById("employee-table").innerHTML = rows_tr;
}
const arr = [];
function handleClickFilter(a) {
  if (document.getElementById(a).classList.contains("active")) {
    document.getElementById(a).classList.remove("active");
    dataEmployess.map((val) => {
      if (
        val.USER.toUpperCase().startsWith(document.getElementById(a).innerText)
      ) {
        arr.pop(val);
      }
    });
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
    const sortedData = [...dataEmployess].sort(function (a, b) {
      if (a.USER < b.USER) {
        return -1;
      }
      if (a.USER > b.USER) {
        return 1;
      }
      return 0;
    });

    console.log(sortedData);
    tableDisplay(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
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

    console.log(sortedData);
    tableDisplay(sortedData);
  }
}
let cnt = 0;
function handleDelete() {
  console.log("delete-btn");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var x of checkboxes) {
    if (x.classList.contains("checkbox-active")) {
      cnt += 1;
      let remove_id = x.id.slice(-1);
      console.log(remove_id);
      dataEmployess.splice(remove_id, 1);
      console.log(dataEmployess);
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
  if (s > 0) {
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
      location: "Santo Tomas",
    },
    {
      location: "Jiangjiazui",
    },
    {
      location: "Iporã",
    },
    {
      location: "Kansas City",
    },
    {
      location: "Velikiye Luki",
    },
    {
      location: "Peddie",
    },
    {
      location: "Oyonnax",
    },
    {
      location: "Alibago",
    },
    {
      location: "Blokdesa Situgede",
    },
    {
      location: "Xuebu",
    },
    {
      location: "Kuleqi",
    },
    {
      location: "Koski Tl",
    },
    {
      location: "Jiachuan",
    },
    {
      location: "Grangwav",
    },
    {
      location: "Pangkalan",
    },
    {
      location: "Kostryzhivka",
    },
    {
      location: "Laifang",
    },
    {
      location: "Gaocheng",
    },
    {
      location: "Xihe",
    },
    {
      location: "Gandara",
    },
    {
      location: "Berëzovskiy",
    },
    {
      location: "Kimovsk",
    },
    {
      location: "MacArthur",
    },
    {
      location: "Áno Kalentíni",
    },
    {
      location: "Kayapa",
    },
    {
      location: "Batulayang",
    },
    {
      location: "Burao",
    },
    {
      location: "Rudziczka",
    },
    {
      location: "São Pedro de Muel",
    },
    {
      location: "Wewit",
    },
    {
      location: "Qianfoling",
    },
    {
      location: "Kampong Chhnang",
    },
    {
      location: "Shentong",
    },
    {
      location: "Góra",
    },
    {
      location: "Kanonjichō",
    },
    {
      location: "Belo",
    },
    {
      location: "Carenang Lor",
    },
    {
      location: "Cunliji",
    },
    {
      location: "Takahashi",
    },
    {
      location: "Inawashiro",
    },
    {
      location: "Palaióchora",
    },
    {
      location: "Tabor",
    },
    {
      location: "Ręczno",
    },
    {
      location: "Hefu",
    },
    {
      location: "Longshe",
    },
    {
      location: "Alès",
    },
    {
      location: "Mafang",
    },
    {
      location: "Francos",
    },
    {
      location: "Delson",
    },
    {
      location: "Tynne",
    },
  ];
  loc.map((d) => {
    locDropDown += `<option value="${d.location}">${d.location}</option>`;
    console.log(locDropDown);
  });
  document.getElementById("filter-loc").innerHTML = locDropDown;
}
const deptArray = [];
let applyBtn=false;
const handleFilterApply = () => {
  applyBtn=true;
  if (arr.length > 0) {
    const deptVal = document.getElementById("filter-department").value;
    arr.map((a) => {
      if (a.DEPARTMENT.match(deptVal)) {
        deptArray.push(a);
      }
    });
  } else {
    const deptVal = document.getElementById("filter-department").value;
    dataEmployess.map((a) => {
      if (a.DEPARTMENT.match(deptVal)) {
        deptArray.push(a);
      }
    });
  }

  tableDisplay(deptArray);
};

const handleAddEmployee=()=>{

}
tableDisplay(dataEmployess);
alphabetsDisplay();
