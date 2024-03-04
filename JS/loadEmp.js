define(function() {
   async function LoadEmployeePage() {
    await fetchData(checkPreviousData());
    require(['./filterLoad'],function(filter){
        filter.handleFilterDept();
        filter.handleFilterLoc();
        filter.handleFilterStatus();
    })
}
    async function fetchData(data) {
        let response = await (await fetch("./data1.json")).json();
        response = response.concat(data);
        dataEmployess = response;
        require(['./tableDisplay'],function(display){
                display.displayTable(dataEmployess);
        })
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


return{
    LoadEmployeePage:LoadEmployeePage,
}    
});

