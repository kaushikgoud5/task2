var updateData = localStorage.getItem("updateEmp");

interface DataEdit {
  user: string;
  empId: string;
  dob: string;
  mobile: string;
  department: string;
  location: string;
  joinDate: string;
  role: string;
  assignJob: string;
  assignProject: string;
  imgSrc: string;
  email: string;
  fname: string;
  lname: string;
  status: boolean;
}
class AddEmployee {
  private _user: string;
  private _empId: string;
  private _dob: string;
  private _mobile: string;
  private _department: string;
  private _location: string;
  private _joinDate: string;
  private _role: string;
  private _assignJob: string;
  private _assignProject: string;
  private _imgSrc: string;
  private _email: string;
  private _fname: string;
  private _lname: string;
  private _status: boolean;
  public emptyfield = false;
  public isExisiting = false;

  constructor(
    user: string,
    empId: string,
    dob: string,
    mobile: string,
    department: string,
    location: string,
    joinDate: string,
    role: string,
    assignJob: string,
    assignProject: string,
    imgSrc: string,
    email: string,
    fname: string,
    lname: string,
    status: boolean
  ) {
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
  }

  public addEmployeeData(): void {
    let obj: DataEdit[] = [
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
      if (this.checkAllFields() && this.isIdUnique(this._empId)) {
        this.emptyfield = false;
        this.addEmployee(obj);
        this.resetForm(); //reseting the form before adding or updating
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.getElementById("show-toast").classList.toggle("d-none");
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 1000);
      } else {
        changeFormTemplate();
      }
    } else if (updateData != null) {
      this.updateEmployee(obj);
      this.resetForm(); //reseting the form before adding or updating
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementById("show-toast").classList.toggle("d-none");
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 1000);
    }
  }
  public addEmployee(obj: DataEdit[]) {
    let strObj = JSON.stringify(obj);
    let prevData = localStorage.getItem("addData");
    if (prevData) {
      let prevDat: DataEdit[] = JSON.parse(prevData);
      obj = obj.concat(prevDat);
      let obj1 = JSON.stringify(obj);
      localStorage.setItem("addData", obj1);
    } else {
      localStorage.setItem("addData", strObj);
    }
  }
  public updateEmployee(obj: DataEdit[]) {
    let oldData = JSON.parse(localStorage.getItem("addData"));
    for (let k in oldData) {
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
  public isIdUnique(empID: string) {
    let lsData: DataEdit[] = JSON.parse(localStorage.getItem("addData"));
    for (let obj in lsData) {
      if (lsData[obj].empId === empID) {
        this.isExisiting = true;
        document.getElementById(
          "validate-msg-emp-no"
        ).innerHTML = `<span><i class="ph-fill ph-warning-diamond"></i></span>Already Used Check Your Employee ID`;
        document
          .getElementById("validate-msg-emp-no")
          .classList.remove("d-none");
        return false;
      }
    }
    return true;
  }

  public resetForm() {
    let fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (let i = 0; i < fields.length; i++) {
      document.forms["form-data"][fields[i]].value = "";
    }
  }
  public checkAllFields() {
    let fields = ["emp-no", "fname", "lname", "email", "jdate"];
    for (let i = 0; i < fields.length; i++) {
      if (document.forms["form-data"][fields[i]].value === "") {
        document
          .getElementById(`validate-msg-${fields[i]}`)
          .classList.remove("d-none");
        this.emptyfield = true;
      } else {
        if (
          !document
            .getElementById(`validate-msg-${fields[i]}`)
            .classList.contains("d-none")
        ) {
          document
            .getElementById(`validate-msg-${fields[i]}`)
            .classList.add("d-none");
        }
      }
    }
    if (this.emptyfield) {
      this.emptyfield = false;
      return false;
    } else {
      return true;
    }
  }
}

document.getElementById("btn-employee").addEventListener("click", () => {
  let e = document.getElementById("dept-inp-form") as HTMLSelectElement;
  let department = e.options[e.selectedIndex].text;

  let l = document.getElementById("location") as HTMLSelectElement;
  let location = l.options[l.selectedIndex].text;

  let j = document.getElementById("job-title") as HTMLSelectElement;
  let role = j.options[j.selectedIndex].text;

  let a = document.getElementById("assign-job") as HTMLSelectElement;
  let assignJob = a.options[a.selectedIndex].text;

  let i = document.getElementById("assign-inp-proj") as HTMLSelectElement;
  let assignProject = i.options[i.selectedIndex].text;
  let fname = (document.getElementById("fname") as HTMLInputElement).value;
  let lname = (document.getElementById("lname") as HTMLInputElement).value;
  let user =
    (document.getElementById("fname") as HTMLInputElement).value +
    " " +
    (document.getElementById("lname") as HTMLInputElement).value;
  let empId = (document.getElementById("emp-no") as HTMLInputElement).value;
  let dob = (document.getElementById("dob") as HTMLInputElement).value;
  let email = (document.getElementById("email") as HTMLInputElement).value;
  let mobile = (document.getElementById("mobile") as HTMLInputElement).value;
  let joinDate = (document.getElementById("jdate") as HTMLInputElement).value;
  let imgSrc = (document.getElementById("user-img") as HTMLInputElement).src;
  let status = true;
  const objEmp = new AddEmployee(
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
    lname,
    status
  );
  objEmp.addEmployeeData();
});


function uploadProfilePic() {
  let inpFile = document.getElementById("upload-img") as HTMLInputElement;
  let profilePic = document.getElementById("user-img") as HTMLImageElement;
  let uploadbtn = document.getElementById("btn-upload");
  console.log(inpFile);
  inpFile.onchange = () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        profilePic.src = reader.result;
      }
    });
    reader.readAsDataURL(inpFile.files[0]);
  };
  uploadbtn.onclick = () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") profilePic.src = reader.result;
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
    let updateDat: DataEdit = JSON.parse(updateData);
    document.forms["form-data"]["emp-no"].value = updateDat.empId.slice(0, 8);
    document.forms["form-data"]["fname"].value = updateDat.user.split(" ")[0];
    document.forms["form-data"]["lname"].value = updateDat.user.split(" ")[1];
    document.forms["form-data"]["email"].value =
      updateDat.user.split(" ")[0] + "@tezo.com";
    document.forms["form-data"]["jdate"].value = updateDat.joinDate;
    document.forms["form-data"]["mobile"].value = updateDat.mobile;
    document.forms["form-data"]["dob"].value = updateDat.dob;
    let l = document.getElementById("location") as HTMLSelectElement;
    l.options[l.selectedIndex].text = updateDat.location;
    (document.getElementById("user-img") as HTMLImageElement).src =
      updateDat.imgSrc;
    let e = document.getElementById("dept-inp-form") as HTMLSelectElement;
    e.options[e.selectedIndex].text = updateDat.department;

    let j = document.getElementById("job-title") as HTMLSelectElement;
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
  let y = document.getElementsByClassName("inp-form-profile");
  y[0].className += " d-flex  g-05 align-items-center ";
  let x = document.getElementsByClassName("inp-form-row-1");
  for (let i = 0; i < x.length; i++) {
    x[i].className += " inp-validation";
  }
}

uploadProfilePic();
updateEmployeeAndFillForm();
