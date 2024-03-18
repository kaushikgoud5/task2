var updateData = localStorage.getItem("updateEmp");
var AddEmployee = /** @class */ (function () {
    function AddEmployee(user, empId, dob, mobile, department, location, joinDate, role, assignJob, assignProject, imgSrc, email, fname, lname, status) {
        this.emptyfield = false;
        this.isExisiting = false;
        this._user = user;
        this._empId = empId;
        this._dob = dob;
        this._mobile = mobile;
        this._department = department;
        this._location = location;
        this._joinDate = joinDate;
        this._role = role;
        this._assignJob = assignJob;
        this._assignProject = assignProject;
        this._imgSrc = imgSrc;
        this._fname = fname;
        this._lname = lname;
        this._status = status;
        this._email = email;
    }
    AddEmployee.prototype.addEmployeeData = function () {
        var obj = [
            {
                user: this._user,
                empId: this._empId,
                dob: this._dob,
                mobile: this._mobile,
                department: this._department,
                location: this._location,
                joinDate: this._joinDate,
                role: this._role,
                assignJob: this._assignJob,
                assignProject: this._assignProject,
                imgSrc: this._imgSrc,
                email: this._email,
                fname: this._fname,
                lname: this._lname,
                status: this._status,
            },
        ];
        if (updateData == null) {
            var a = this.checkAllFields();
            var b = this.isIdUnique(this._empId);
            var c = this.validateEmail(this._email);
            if (a && b && c) {
                this.emptyfield = false;
                this.addEmployee(obj);
                this.resetForm(); //reseting the form before adding or updating
                window.scrollTo({ top: 0, behavior: "smooth" });
                document.getElementById("show-toast").classList.toggle("d-none");
                setTimeout(function () {
                    window.location.href = "./index.html";
                }, 1000);
            }
            else {
                changeFormTemplate();
            }
        }
        else if (updateData != null) {
            this.updateEmployee(obj);
            this.resetForm(); //reseting the form before adding or updating
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.getElementById("show-toast").classList.toggle("d-none");
            setTimeout(function () {
                window.location.href = "./index.html";
            }, 1000);
        }
    };
    AddEmployee.prototype.addEmployee = function (obj) {
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
    };
    AddEmployee.prototype.updateEmployee = function (obj) {
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
    };
    AddEmployee.prototype.isIdUnique = function (empID) {
        var lsData = JSON.parse(localStorage.getItem("addData"));
        for (var obj in lsData) {
            if (lsData[obj].empId === empID) {
                this.isExisiting = true;
                document.getElementById("validate-msg-emp-no").innerHTML = "<span><i class=\"ph-fill ph-warning-diamond\"></i></span>Already Used Check Your Employee ID";
                document
                    .getElementById("validate-msg-emp-no")
                    .classList.remove("d-none");
                return false;
            }
        }
        return true;
    };
    AddEmployee.prototype.resetForm = function () {
        var fields = ["emp-no", "fname", "lname", "email", "jdate"];
        for (var i = 0; i < fields.length; i++) {
            document.forms["form-data"][fields[i]].value = "";
        }
    };
    AddEmployee.prototype.checkAllFields = function () {
        var fields = ["emp-no", "fname", "lname", "email", "jdate"];
        for (var i = 0; i < fields.length; i++) {
            if (document.forms["form-data"][fields[i]].value === "") {
                document
                    .getElementById("validate-msg-".concat(fields[i]))
                    .classList.remove("d-none");
                this.emptyfield = true;
            }
            else {
                if (!document
                    .getElementById("validate-msg-".concat(fields[i]))
                    .classList.contains("d-none")) {
                    document
                        .getElementById("validate-msg-".concat(fields[i]))
                        .classList.add("d-none");
                }
            }
        }
        if (this.emptyfield) {
            this.emptyfield = false;
            return false;
        }
        else {
            return true;
        }
    };
    AddEmployee.prototype.validateEmail = function (email) {
        console.log(typeof document.getElementById("email").value);
        console.log(email.length);
        var regexEmail = /^[a-zA-z][a-zA-Z0-9]*@[a-zA-z]+[.][a-z]+$/;
        if (regexEmail.test(email)) {
            return true;
        }
        else if (email.length > 0) {
            document.getElementById("validate-msg-email").innerHTML = "<span><i class=\"ph-fill ph-warning-diamond\"></i></span>Enter a valid Email";
            document.getElementById("validate-msg-email").classList.remove("d-none");
            return false;
        }
    };
    return AddEmployee;
}());
document.getElementById("btn-employee").addEventListener("click", function () {
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
    var user = document.getElementById("fname").value +
        " " +
        document.getElementById("lname").value;
    var empId = document.getElementById("emp-no").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var joinDate = document.getElementById("jdate").value;
    var imgSrc = document.getElementById("user-img").src;
    var status = true;
    var objEmp = new AddEmployee(user, empId, dob, mobile, department, location, joinDate, role, assignJob, assignProject, imgSrc, email, fname, lname, status);
    objEmp.addEmployeeData();
});
function uploadProfilePic() {
    var inpFile = document.getElementById("upload-img");
    var profilePic = document.getElementById("user-img");
    var uploadbtn = document.getElementById("btn-upload");
    console.log(inpFile);
    inpFile.onchange = function () {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            if (typeof reader.result === "string") {
                profilePic.src = reader.result;
            }
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
    uploadbtn.onclick = function () {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            if (typeof reader.result === "string")
                profilePic.src = reader.result;
        });
        reader.readAsDataURL(inpFile.files[0]);
    };
}
function updateEmployeeAndFillForm() {
    if (updateData != undefined) {
        document.getElementById("add-employee").innerText = "Update Employee";
        document.getElementById("btn-employee").innerText = "Update Employee";
        document.getElementById("show-toast").innerText =
            "Record Updated Successfully";
        var updateDat = JSON.parse(updateData);
        document.forms["form-data"]["emp-no"].value = updateDat.empId.slice(0, 8);
        document.forms["form-data"]["fname"].value = updateDat.user.split(" ")[0];
        document.forms["form-data"]["lname"].value = updateDat.user.split(" ")[1];
        document.forms["form-data"]["email"].value =
            updateDat.user.split(" ")[0] + "@tezo.com";
        document.forms["form-data"]["jdate"].value = updateDat.joinDate;
        document.forms["form-data"]["mobile"].value = updateDat.mobile;
        document.forms["form-data"]["dob"].value = updateDat.dob;
        var l = document.getElementById("location");
        l.options[l.selectedIndex].text = updateDat.location;
        document.getElementById("user-img").src =
            updateDat.imgSrc;
        var e = document.getElementById("dept-inp-form");
        e.options[e.selectedIndex].text = updateDat.department;
        var j = document.getElementById("job-title");
        j.options[j.selectedIndex].text = updateDat.role;
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
function Validations(event) {
    var value = event.key;
    var assciiVal = value.charCodeAt(0);
    if ((assciiVal >= 65 && assciiVal <= 90) || (assciiVal >= 97 && assciiVal <= 122)) {
    }
    else {
        event.preventDefault();
    }
}
document.getElementById("fname").addEventListener("keypress", function (event) {
    Validations(event);
});
document.getElementById("lname").addEventListener("keypress", function (event) {
    Validations(event);
});
uploadProfilePic();
updateEmployeeAndFillForm();
