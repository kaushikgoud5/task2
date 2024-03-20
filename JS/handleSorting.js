import { dataEmployess } from "./loadEmp.js";
import { displayTable } from "./displayTable.js";
    let isAscending = true;
 export   function sorting(column) {
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
