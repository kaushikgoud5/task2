define(function() {
    function handleSearchBox() {
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
        require(["./tableDisplay"], function (display) {
            display.displayTable(searchArr);
          });
      }
      return handleSearchBox;
});