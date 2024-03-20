import { displayTable } from "./displayTable.js";
import { dataEmployess } from "./loadEmp.js";
export  function handleSearchBox() {
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