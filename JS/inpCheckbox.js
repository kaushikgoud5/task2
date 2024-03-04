 define(function() {
    function handleCheckBox(checkbox) {
      if (checkbox.checked == true) {
        s = dataEmployess.length;
        document.getElementById("btn-delete-active").classList.add("btn-active");
        const checkboxes = document.getElementsByClassName("inp-check");
        for (var x of checkboxes) {
          x.classList.add("checkbox-active");
          x.checked = true;
        }
      } else {
        s = 0;
        document.getElementById("btn-delete-active").classList.remove("btn-active");
        const checkboxes = document.getElementsByClassName("inp-check");
        for (var x of checkboxes) {
          x.classList.remove("checkbox-active");
          x.checked = false;
        }
      }
    }
    return handleCheckBox
  });