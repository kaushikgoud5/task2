let emptyfield = false;
let isExisiting = false;
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
function isIdUnique(empID) {
    let lsData = JSON.parse(localStorage.getItem("addData"));
    for (obj in lsData) {
        if (lsData[obj].empId === empID) {
            isExisiting = true;
            document.getElementById("validate-msg-emp-no").innerHTML=`<span><i class="ph-fill ph-warning-diamond"></i></span>Already Used Check Your Employee ID`;
            document.getElementById("validate-msg-emp-no").classList.remove("d-none");
            return false;
        }
    }
    return true;
}
function checkAllFields() {
    let fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (let i = 0; i < fields.length; i++) {
        if (document.forms["form-data"][fields[i]].value === "") {
            console.log(document.forms["form-data"][fields[i]].value)
            document.getElementById(`validate-msg-${fields[i]}`).classList.remove("d-none");
            emptyfield = true;
        }
        else{
            if(!document.getElementById(`validate-msg-${fields[i]}`).classList.contains("d-none")){
                document.getElementById(`validate-msg-${fields[i]}`).classList.add("d-none");
            }
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
        if (obj[0].empId == oldData[k].empId) {
            oldData[k].user = obj[0].user;
            oldData[k].dob = obj[0].dob;
            oldData[k].location = obj[0].location;
            oldData[k].joinDate = obj[0].joinDate;
            oldData[k].department = obj[0].department;
            oldData[k].role = obj[0].role;
            oldData[k].imgSrc = obj[0].imgSrc;
        }
    }
    oldData = JSON.stringify(oldData);
    localStorage.setItem("addData", oldData);
}
function handleAddEmp() {
    //retreiving all the form information and storing the variables
    let e = document.getElementById("dept-inp-form");
    let department = e.options[e.selectedIndex].text;

    let l = document.getElementById("location");
    let location = l.options[l.selectedIndex].text;

    let j = document.getElementById("job-title");
    let role = j.options[j.selectedIndex].text;

    let a = document.getElementById("assign-job");
    let assignJob = a.options[a.selectedIndex].text;

    let i = document.getElementById("assign-inp-proj");
    let assignProject = i.options[i.selectedIndex].text;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let user = document.getElementById("fname").value +" " +document.getElementById("lname").value;
    let empId = document.getElementById("emp-no").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let joinDate = document.getElementById("jdate").value;
    let imgSrc = document.getElementById("user-img").src;
    let obj = [
        {
            user,
            empId,
            dob,
            mobile,
            department,
            location,
            joinDate,
            role,
            assignJob,
            assignProject,
            imgSrc,
            email,
            fname,
            lname
        },
    ];
    if(updateData==null){
        if (checkAllFields() & isIdUnique(empId) ) {
            addEmployeeData(obj);
            resetForm();  //reseting the form before adding or updating
            window.scrollTo(top);
            document.getElementById("show-toast").classList.toggle("d-none");
            setTimeout(() => {
                window.location.href = "./index.html";
            }, 1000); 
        }
    }
    else if(updateData!=null){
        updateEmployeeData(obj);
        resetForm();  //reseting the form before adding or updating
        window.scrollTo(top);
        document.getElementById("show-toast").classList.toggle("d-none");
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1000); 
    }

   
}

function updateEmployeeAndFillForm() {
    if (updateData != undefined) {
        document.getElementById("add-employee").innerText = "Update Employee";
        document.getElementById("btn-employee").innerText = "Update Employee";
        document.getElementById("show-toast").innerText = "Record Updated Successfully";
        updateData = JSON.parse(updateData);
        document.forms["form-data"]["emp-no"].value = updateData.empId.slice(0, 8);
        document.forms["form-data"]["fname"].value = updateData.user.split(" ")[0];
        document.forms["form-data"]["lname"].value = updateData.user.split(" ")[1];
        document.forms["form-data"]["email"].value =updateData.user.split(" ")[0] + "@tezo.com";
        document.forms["form-data"]["jdate"].value = updateData.joinDate;
        document.forms["form-data"]["mobile"].value = updateData.mobile;
        document.forms["form-data"]["dob"].value = updateData.dob;
        let l = document.getElementById("location");
        l.options[l.selectedIndex].text = updateData.location;
        document.getElementById("user-img").src = updateData.imgSrc;
        let e = document.getElementById("dept-inp-form");
        e.options[e.selectedIndex].text = updateData.department;

        let j = document.getElementById("job-title");
        j.options[j.selectedIndex].text = updateData.role;
    }
}

function changeFormTemplate(){
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

uploadProfilePic();
updateEmployeeAndFillForm();
