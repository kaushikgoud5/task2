
    let locationOptions = document.getElementById("options-body-loc").classList;
    let departmentOptions = document.getElementById("options-body").classList;
    let statusOptions = document.getElementById("options-body-status").classList;
  export  function handleLoc() {
        locationOptions.toggle("d-none");
        if (!departmentOptions.contains("d-none")) {
            departmentOptions.toggle("d-none");
        }
        if (!statusOptions.contains("d-none")) {
            statusOptions.toggle("d-none");
        }
    }
   export function handleDpt() {
        departmentOptions.toggle("d-none");
        if (!statusOptions.contains("d-none")) {
            statusOptions.toggle("d-none");
        }
        if (!locationOptions.contains("d-none")) {
            locationOptions.toggle("d-none");
        }
    }
  export  function handleStat() {
        statusOptions.toggle("d-none");
        if (!locationOptions.contains("d-none")) {
            locationOptions.toggle("d-none");
        }
        if (!departmentOptions.contains("d-none")) {
            departmentOptions.toggle("d-none");
        }
    }