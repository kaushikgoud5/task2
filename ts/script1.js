var emptyfield = false;
var isExisiting = false;
var updateData = localStorage.getItem("updateEmp");
function uploadProfilePic() {
    var inpFile = document.getElementById("upload-img");
    var profilePic = document.getElementById("user-img");
    var uploadbtn = document.getElementById("btn-upload");
    inpFile.onchange = function () {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            if (reader.result === "string")
                profilePic.src = reader.result;
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
    uploadbtn.onclick = function () {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            if (reader.result === "string")
                profilePic.src = reader.result;
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
}
function isIdUnique(empID) {
    var lsData = JSON.parse(localStorage.getItem("addData"));
    for (var obj in lsData) {
        if (lsData[obj].empId === empID) {
            isExisiting = true;
            document.getElementById("validate-msg-emp-no").innerHTML = "<span><i class=\"ph-fill ph-warning-diamond\"></i></span>Already Used Check Your Employee ID";
            document.getElementById("validate-msg-emp-no").classList.remove("d-none");
            return false;
        }
    }
    return true;
}
function checkAllFields() {
    var fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (var i = 0; i < fields.length; i++) {
        if (document.forms["form-data"][fields[i]].value === "") {
            document.getElementById("validate-msg-".concat(fields[i])).classList.remove("d-none");
            console.log(fields[i]);
            emptyfield = true;
        }
        else {
            if (!document.getElementById("validate-msg-".concat(fields[i])).classList.contains("d-none")) {
                document.getElementById("validate-msg-".concat(fields[i])).classList.add("d-none");
            }
        }
    }
    console.log(emptyfield);
    if (emptyfield) {
        return false;
    }
    else {
        return true;
    }
}
function resetForm() {
    var fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (var i = 0; i < fields.length; i++) {
        document.forms["form-data"][fields[i]].value = "";
    }
}
function addEmployeeData(obj) {
    var strObj = JSON.stringify(obj);
    var prevData = localStorage.getItem("addData");
    if (prevData) {
        var prevDat = JSON.parse(prevData);
        obj = obj.concat(prevDat);
        var obj1 = JSON.stringify(obj);
        localStorage.setItem("addData", obj1);
    }
    else {
        localStorage.setItem("addData", strObj);
    }
}
function updateEmployeeData(obj) {
    var oldData = JSON.parse(localStorage.getItem("addData"));
    for (var k in oldData) {
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
    var e = document.getElementById("dept-inp-form");
    var department = e.options[e.selectedIndex].text;
    var l = document.getElementById("location");
    var location = l.options[l.selectedIndex].text;
    var j = document.getElementById("job-title");
    var role = j.options[j.selectedIndex].text;
    var a = document.getElementById("assign-job");
    var assignJob = a.options[a.selectedIndex].text;
    var i = document.getElementById("assign-inp-proj");
    var assignProject = i.options[i.selectedIndex].text;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var user = document.getElementById("fname").value + " " + document.getElementById("lname").value;
    var empId = document.getElementById("emp-no").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var joinDate = document.getElementById("jdate").value;
    var imgSrc = document.getElementById("user-img").src;
    var status = true;
    var obj = [
        {
            user: user,
            empId: empId,
            dob: dob,
            mobile: mobile,
            department: department,
            location: location,
            joinDate: joinDate,
            role: role,
            assignJob: assignJob,
            assignProject: assignProject,
            imgSrc: imgSrc,
            email: email,
            fname: fname,
            lname: lname,
            status: status
        },
    ];
    if (updateData == null) {
        if (checkAllFields() && isIdUnique(empId)) {
            console.log(obj);
            emptyfield = false;
            addEmployeeData(obj);
            resetForm(); //reseting the form before adding or updating
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.getElementById("show-toast").classList.toggle("d-none");
            setTimeout(function () {
                window.location.href = "./index.html";
            }, 1000);
        }
        // else{
        //     changeFormTemplate()
        // }
    }
    else if (updateData != null) {
        updateEmployeeData(obj);
        resetForm(); //reseting the form before adding or updating
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.getElementById("show-toast").classList.toggle("d-none");
        setTimeout(function () {
            window.location.href = "./index.html";
        }, 1000);
    }
}
function updateEmployeeAndFillForm() {
    if (updateData != undefined) {
        document.getElementById("add-employee").innerText = "Update Employee";
        document.getElementById("btn-employee").innerText = "Update Employee";
        document.getElementById("show-toast").innerText = "Record Updated Successfully";
        var updateDat = JSON.parse(updateData);
        document.forms["form-data"]["emp-no"].value = updateDat.empId.slice(0, 8);
        document.forms["form-data"]["fname"].value = updateDat.user.split(" ")[0];
        document.forms["form-data"]["lname"].value = updateDat.user.split(" ")[1];
        document.forms["form-data"]["email"].value = updateDat.user.split(" ")[0] + "@tezo.com";
        document.forms["form-data"]["jdate"].value = updateDat.joinDate;
        document.forms["form-data"]["mobile"].value = updateDat.mobile;
        document.forms["form-data"]["dob"].value = updateDat.dob;
        var l = document.getElementById("location");
        l.options[l.selectedIndex].text = updateDat.location;
        document.getElementById("user-img").src = updateDat.imgSrc;
        var e = document.getElementById("dept-inp-form");
        e.options[e.selectedIndex].text = updateDat.department;
        var j = document.getElementById("job-title");
        j.options[j.selectedIndex].text = updateDat.role;
        console.log(updateDat);
    }
}
function changeFormTemplate() {
    document.getElementById("edit").classList.add("d-flex");
    document.getElementById("edit").classList.add("show");
    document.getElementById("btn-upload").classList.remove("btn-emp");
    document.getElementById("btn-upload").classList.add("btn-accept");
    document.getElementById("btn-upload").classList.add("h-3");
    document.getElementById("inp-form").classList.remove("d-flex");
    var y = document.getElementsByClassName("inp-form-profile");
    y[0].className += " d-flex  g-05 align-items-center ";
    var x = document.getElementsByClassName("inp-form-row-1");
    for (var i = 0; i < x.length; i++) {
        x[i].className += " inp-validation";
    }
}
uploadProfilePic();
updateEmployeeAndFillForm();
