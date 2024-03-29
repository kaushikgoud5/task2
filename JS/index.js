require.config({
    baseUrl: 'JS',
    paths: {
        'hidenav':'hideNav',
        'displayAlphabets':'displayAlpha',
        'load':'loadEmp',
        'handleFilter':'handleFilter',
        'tableDisplay':'displayTable',
        'checkAll':'inpCheckbox',
        'sorting':'handleSorting',
        'handleDelete':'handleDelete',
        'export':'exportToCsv',
        'filterApply':'filterApply',
    }
});

require(['load','hidenav','displayAlphabets'], function(load) {  
document.getElementById("body").onload=load.LoadEmployeePage();
});
require(['checkAll'],function(handle){  
   document.getElementById("inp-check-box").addEventListener("click",(event)=>{
    handle(event.target)
   })

})
require(['sorting'],function(sort){
    document.getElementById('sort-btn-user').addEventListener("click",()=>{
        sort(1)
    })
    document.getElementById('sort-btn-loc').addEventListener("click",()=>{
        sort(2)
    })
    document.getElementById('sort-btn-dep').addEventListener("click",()=>{
        sort(3)
    })
    document.getElementById('sort-btn-role').addEventListener("click",()=>{
        sort(4)
    })
    document.getElementById('sort-btn-emp').addEventListener("click",()=>{
        sort(5)
    })
    document.getElementById('sort-btn-status').addEventListener("click",()=>{
        sort(6)
    })
    document.getElementById('sort-btn-join-date').addEventListener("click",()=>{
        sort(7)
    })
})
require(['handleDelete'],function(delet){
    document.getElementById("btn-delete-active").addEventListener("click",()=>{
        delet()
    })
})
require(['export'],function(toCsv){
    document.getElementById("btn-export-to-csv").addEventListener("click",()=>{
            toCsv()
    })
})


document.getElementById("filter-status").addEventListener("click",()=>{
    require(['handleFilter'],function(filter){
        filter.handleStat();
     })
 })
document.getElementById("filter-department").addEventListener("click",()=>{
    require(['handleFilter'],function(filter){
        filter.handleDpt();
     })
 })
document.getElementById("filter-location").addEventListener("click",()=>{
    require(['handleFilter'],function(filter){
        filter.handleLoc();
     })
 })
 require(['filterApply'],function(apply){
   document.getElementById("btn-filter-apply").addEventListener("click",()=>{
    apply()
   })
 })
 require(['handleReset'],function(reset){
    document.getElementById("btn-reset-filter").addEventListener("click",()=>{
        reset();
    })
 })
 require(['disable'],(disable)=>{
    document.getElementById("body").addEventListener("click", () => {
        disable()
    });
 })
 require(['addEditEmployee'],function(addEmployee){
document.getElementById("btn-add-emp").addEventListener("click",()=>{
    addEmployee();
})
 })