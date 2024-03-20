import {handleFilterDept,handleFilterLoc,handleFilterStatus} from './filterLoad.js'
import { displayTable } from './displayTable.js';
export  let dataEmployess;
export async function LoadEmployeePage() {
    await fetchData(checkPreviousData());
        handleFilterDept(dataEmployess);
        handleFilterLoc(dataEmployess);
        handleFilterStatus();
}
 export  async function fetchData(data) {
        let response = await (await fetch("./data1.json")).json();
        response = response.concat(data);
        dataEmployess = response;
     
        displayTable(dataEmployess);
    }
  export  function checkPreviousData() {
    let newdata = localStorage.getItem("addData");
    if (newdata) {
        newdata = JSON.parse(newdata);
        return newdata;
    } else {
        return [];
    }
    }




