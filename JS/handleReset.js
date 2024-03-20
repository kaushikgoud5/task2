import { displayTable } from "./displayTable.js";
import { dataEmployess } from "./loadEmp.js";
    let locationOptions = document.getElementById("options-body-loc").classList;
    let departmentOptions = document.getElementById("options-body").classList;
    let statusOptions = document.getElementById("options-body-status").classList;
  export const handleFilterReset = () => {
   let locCount = 0;
   let statusCount = 0;
   let deptCount = 0;
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
       
      displayTable(dataEmployess);
    
  };
