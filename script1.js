isValidated = false;
// const checkValidation=(empID,user)=>{
//   let regEmpId=/[TZ]+\d{5}/;
//   if(regEmpId.test(empID)){
//     isValidated=true;
//   }
//   let regUser=/[A-Za-z\D]/;
//   if(regUser.test(user)){
//     isValidated=true;
//   }
//  return isValidated;
// }

let updateData = localStorage.getItem("updateEmp");
function uploadProfilePic() {
    let inpFile = document.getElementById("upload-img");
    let profilePic = document.getElementById("user-img");
    let uploadbtn = document.getElementById("btn-upload");
    inpFile.onchange = () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            profilePic.src = reader.result;
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
    uploadbtn.onclick = () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            profilePic.src = reader.result;
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
}
let emptyfield = false;
let isExisiting = false;

function isIdUnique(empID) {
    let lsData = JSON.parse(localStorage.getItem("addData"));
    for (obj in lsData) {
        if (lsData[obj].EMPNO === empID) {
            isExisiting = true;
            return false;
        }
    }
    return true;
}
function checkAllFields() {
    let fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (let i = 0; i < fields.length; i++) {
        if (document.forms["form-data"][fields[i]].value === "") {
            emptyfield = true;
        }
    }
    if (emptyfield) {
        return false;
    } else {
        return true;
    }
}
function resetForm() {
    let fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (let i = 0; i < fields.length; i++) {
        document.forms["form-data"][fields[i]].value = "";
    }
}
function addEmployeeData(obj) {
    let strObj = JSON.stringify(obj);
    let prevData = localStorage.getItem("addData");
    if (prevData) {
        prevData = JSON.parse(prevData);
        obj = obj.concat(prevData);
        obj = JSON.stringify(obj);
        localStorage.setItem("addData", obj);
    } else {
        localStorage.setItem("addData", strObj);
    }
}
function updateEmployeeData(obj) {
    let oldData = JSON.parse(localStorage.getItem("addData"));
    for (k in oldData) {
        if (obj[0].EMPNO == oldData[k].EMPNO) {
            oldData[k].USER = obj[0].USER;
            oldData[k].dob = obj[0].dob;
            oldData[k].LOCATION = obj[0].LOCATION;
            oldData[k].JOINDT = obj[0].JOINDT;
            oldData[k].DEPARTMENT = obj[0].DEPARTMENT;
            oldData[k].ROLE = obj[0].ROLE;
            oldData[k].IMGSRC = obj[0].IMGSRC;
        }
    }
    oldData = JSON.stringify(oldData);
    localStorage.setItem("addData", oldData);
}
function handleAddEmp() {
    //retreiving all the form information and storing the variables
    let e = document.getElementById("dept-inp-form");
    let DEPARTMENT = e.options[e.selectedIndex].text;

    let l = document.getElementById("location");
    let LOCATION = l.options[l.selectedIndex].text;

    let j = document.getElementById("job-title");
    let ROLE = j.options[j.selectedIndex].text;

    let a = document.getElementById("assign-job");
    let Assign_Job = a.options[a.selectedIndex].text;

    let i = document.getElementById("assign-inp-proj");
    let Assign_Project = i.options[i.selectedIndex].text;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let USER =
        document.getElementById("fname").value +
        " " +
        document.getElementById("lname").value;
    let EMPNO = document.getElementById("emp-no").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let JOINDT = document.getElementById("jdate").value;
    let IMGSRC = document.getElementById("user-img").src;
    let obj = [
        {
            USER,
            EMPNO,
            dob,
            mobile,
            DEPARTMENT,
            LOCATION,
            JOINDT,
            ROLE,
            Assign_Job,
            Assign_Project,
            IMGSRC,
            email,
            fname,
            lname
        },
    ];
    if (checkAllFields() && isIdUnique()) {
        if (updateData == null) {
            addEmployeeData(obj); // addding to the local storage.
        } else {
            updateEmployeeData(obj); //updating the employee details
        }
        resetForm();  //reseting the form before adding or updating
        window.scrollTo(top);
        document.getElementById("show-toast").classList.toggle("d-none");
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1000);
    } 
    else {
        showErrorMessage(obj[0]);
        if (isExisiting) {
            document.getElementById("validate-msg-empno").innerText = "Already Used Check Your Employee ID";
            document.getElementById("validate-msg-empno").classList.remove("d-none");
        }
        document.getElementById("edit").className -= "d-flex";
        document.getElementById("edit").className += " show";
        document.getElementById("btn-upload").className -= " btn-emp";
        document.getElementById("btn-upload").className += " btn-accept  h-3";
        document.getElementById("inp-form").className -= "d-flex";
        let y = document.getElementsByClassName("inp-form-profile");
        y[0].className += " d-flex  g-05 align-items-center ";
        let x = document.getElementsByClassName("inp-form-row-1");
        for (let i = 0; i < x.length; i++) {
            x[i].className += " inp-validation";
        }
    }
}

function showErrorMessage(obj) {
    if (!obj.fname.value) {
        document.getElementById("validate-msg-fname").classList.remove("d-none");
    }
    if (!obj.lname.value) {
        document.getElementById("validate-msg-lname").classList.remove("d-none");
    }
    if (!obj.EMPNO.value) {
        document.getElementById("validate-msg-empno").classList.remove("d-none");
    }
    if (!obj.email.value) {
        document.getElementById("validate-msg-email").classList.remove("d-none");
    }
    if (!obj.JOINDT.value) {
        document.getElementById("validate-msg-jdate").classList.remove("d-none");
    }
}

function updateEmployeeAndFillForm() {
    if (updateData != undefined) {
        document.getElementById("add-employee").innerText = "Update Employee";
        document.getElementById("btn-employee").innerText = "Update Employee";
        document.getElementById("show-toast").innerText = "Record Updated Successfully";
        updateData = JSON.parse(updateData);
        document.forms["form-data"]["emp-no"].value = updateData.EMPNO.slice(0, 8);
        document.forms["form-data"]["fname"].value = updateData.USER.split(" ")[0];
        document.forms["form-data"]["lname"].value = updateData.USER.split(" ")[1];
        document.forms["form-data"]["email"].value =updateData.USER.split(" ")[0] + "@tezo.com";
        document.forms["form-data"]["jdate"].value = updateData.JOINDT;
        let l = document.getElementById("location");
        l.options[l.selectedIndex].text = updateData.LOCATION;
        document.getElementById("user-img").src = updateData.IMGSRC;
        let e = document.getElementById("dept-inp-form");
        e.options[e.selectedIndex].text = updateData.DEPARTMENT;

        let j = document.getElementById("job-title");
        j.options[j.selectedIndex].text = updateData.ROLE;
    }
}

uploadProfilePic();
updateEmployeeAndFillForm();
