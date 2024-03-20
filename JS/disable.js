let locationOptions = document.getElementById("options-body-loc").classList;
let departmentOptions = document.getElementById("options-body").classList;
let statusOptions = document.getElementById("options-body-status").classList;


 export function disableDropDowns() {
        if (!locationOptions.contains("d-none")) {
            locationOptions.toggle("d-none");
        }
        if (!departmentOptions.contains("d-none")) {
            departmentOptions.toggle("d-none");
        }
        if (!statusOptions.contains("d-none")) {
            statusOptions.toggle("d-none");
        }
        const ellipsisArray = document.getElementsByClassName("ellipsis");
        for (let i = 0; i < ellipsisArray.length; i++) {
            if (!ellipsisArray[i].classList.contains("d-none")) {
                ellipsisArray[i].classList.toggle("d-none");
            }
        }
        
    }