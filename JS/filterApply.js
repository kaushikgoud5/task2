import { dataEmployess } from "./loadEmp.js";
import { displayTable } from "./displayTable.js";
    let locationOptions = document.getElementById("options-body-loc").classList;
    let departmentOptions = document.getElementById("options-body").classList;
    let statusOptions = document.getElementById("options-body-status").classList;
  export  const handleFilterApply = () => {

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