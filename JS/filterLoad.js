let locCount = 0;
let deptCount = 0;
let statusCount = 0;
let value = 0;

export  function handleFilterDept(dataEmployess) {
    let deptData = [];
    dataEmployess.map((ele) => {
      deptData.push(ele.department);
    });
    deptData = [...new Set(deptData)];
    let deptDropDown = "";
    deptData.map((d, idx) => {
      deptDropDown += `
          <div class="d-flex jc-space-btwn p-3" >
          <div class="w-5">
                  <span >${d}</span>
          </div>
          <div >
              <input type="checkbox"  class="check-boxes" name="${d}" id="check-box-dept-${idx}">
          </div>
        </div>`;
    });
    document.getElementById("options-body").innerHTML = deptDropDown;
    attachEventListenersDept(deptData);
  }
export  function handleFilterLoc(dataEmployess) {
    let locDropDown = "";
    let loc = [];
    dataEmployess.map((ele) => {
      loc.push(ele.location);
    });
    loc = [...new Set(loc)];

    loc.map((d, idx) => {
      locDropDown += `<div class="d-flex jc-space-btwn p-3">
          <div class="w-5">
                  <span >${d}</span>
          </div>
          <div >
              <input type="checkbox" class="check-boxes-loc"  name="${d}" id="check-box-loc-${idx}">
          </div>
        </div>`;
    });
    document.getElementById("options-body-loc").innerHTML = locDropDown;
    attachEventListenersLoc(loc);
  }
export  function handleFilterStatus() {
    let statusDropDown = "";
    const statusArray = [
      {
        status: "Active",
      },
      {
        status: "Inactive",
      },
    ];
    statusArray.map((d, idx) => {
      statusDropDown += ` <div class="d-flex jc-space-btwn p-3" >
          
          <div >
                  <span >${d.status}</span>
          </div>
          <div >
              <input type="checkbox" class="check-boxes-status"    name="${d.status}" id="check-box-status-${idx}">
          </div>
        </div>`;
    });
    document.getElementById("options-body-status").innerHTML = statusDropDown;
    attachEventListenersStatus(statusArray);
  }
  function attachEventListenersDept(data) {
    data.forEach(function (ele, idx) {
      document.getElementById(`check-box-dept-${idx}`).addEventListener('click', function (event) {
        enableFilter(this, event)
        getCheckedCountDept(this, event);
      });
    });
  }
  function attachEventListenersLoc(data) {
    data.forEach(function (ele, idx) {
      document.getElementById(`check-box-loc-${idx}`).addEventListener('click', function (event) {
        enableFilter(this, event)
        getCheckedCountLoc(this, event)
      });
    });
  }
  function attachEventListenersStatus(data) {
    data.forEach(function (ele, idx) {
      document.getElementById(`check-box-status-${idx}`).addEventListener('click', function (event) {
        enableFilter(this, event)
        getCheckedCountStatus(this, event);
      });
    });
  }

  function enableFilter(a, event) {
    event.stopPropagation()
    a.checked ? (value += 1) : (value -= 1);
    console.log(value)
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
    console.log(ele.checked)
    document.getElementById("no-of-checks-dept").innerText =
      deptCount === 0 ? "" : `(${deptCount})`;
  }

  function getCheckedCountStatus(ele, event) {
    event.stopPropagation()
    ele.checked ? (statusCount += 1) : (statusCount -= 1);
    document.getElementById("no-of-checks-status").innerText =
      statusCount === 0 ? "" : `(${statusCount})`;
  }



