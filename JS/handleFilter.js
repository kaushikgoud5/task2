define(function () {
    let locationOptions = document.getElementById("options-body-loc").classList;
    let departmentOptions = document.getElementById("options-body").classList;
    let statusOptions = document.getElementById("options-body-status").classList;
    function handleLoc() {
        locationOptions.toggle("d-none");
        if (!departmentOptions.contains("d-none")) {
            departmentOptions.toggle("d-none");
        }
        if (!statusOptions.contains("d-none")) {
            statusOptions.toggle("d-none");
        }
    }
    function handleDpt() {
        departmentOptions.toggle("d-none");
        if (!statusOptions.contains("d-none")) {
            statusOptions.toggle("d-none");
        }
        if (!locationOptions.contains("d-none")) {
            locationOptions.toggle("d-none");
        }
    }
    function handleStat() {
        statusOptions.toggle("d-none");
        if (!locationOptions.contains("d-none")) {
            locationOptions.toggle("d-none");
        }
        if (!departmentOptions.contains("d-none")) {
            departmentOptions.toggle("d-none");
        }
    }
    return {
        handleDpt: handleDpt,
        handleLoc: handleLoc,
        handleStat: handleStat
    }

});