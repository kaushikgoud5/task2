let s=0;
define(function() {
    function handleDelete(rowNumber) {
        if (rowNumber != undefined) {
          console.log(rowNumber)
          dataEmployess.splice(rowNumber, 1);
          require(['./tableDisplay'],function(display){
            display.displayTable(dataEmployess);
    })

        }
        let cnt = 0;
        const checkboxes = document.getElementsByClassName("inp-check");
        for (var x of checkboxes) {
          if (x.classList.contains("checkbox-active")) {
            cnt += 1;
          }
        }
        if (cnt == dataEmployess.length) {
          dataEmployess = [];
          require(['./tableDisplay'],function(display){
            display.displayTable(dataEmployess);
    })
        }
        else {
          for (var x of checkboxes) {
            if (x.classList.contains("checkbox-active")) {
              cnt += 1;
              let remove_id = x.id.split("-")[1];
              s-=1;
              delete dataEmployess[remove_id];
            }
          }
          require(['./tableDisplay'],function(display){
            display.displayTable(dataEmployess);
    })
        }
        document.getElementById("btn-delete-active").classList.remove("btn-active");
      }
      return handleDelete;
    
});