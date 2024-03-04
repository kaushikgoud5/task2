define(function() {
  let s = 0;
    function displayTable(dataEmployess) {
        let rows_tr = "";
        dataEmployess.map(function (ele, index) {
          rows_tr += ` <tr id="${index}">
         <td><input type="checkbox"  class="inp-check" id="check-${index}" /></td>
         <td>
           <div class="table-user-info d-flex align-items-center" id="user-profile">
               <img src="${ele.imgSrc}" alt="">
             <div class="name-email d-flex d-flex-col" >
               <span>${ele.user.toUpperCase()}</span><span class="e-mail">${ele.user.split(" ")[0]
            }@tezo.com</span>
             </div>
           </div>
         </td>
         <td>${ele.location}</td>
         <td>${ele.department}</td>
         <td>${ele.role}</td>
         <td>${ele.empId.slice(0, 8)}</td>
         <td><span id="status-bg">${ele.status === true ? "Active" : "Inactive"}</span></td>
         <td>${ele.joinDate}</td>
         <td class="c-p"> <span id="show-ellipses-${index}">...</span> <div class="d-flex  d-none c-p fs-10 d-flex-col align-items-center ellipsis" id="ellipsis-table-${index}" >
                                                                            <span class="c-p">View Details</span>
                                                                            <span class="c-p"  id="edit-emp-${index}">   Edit</span>
                                                                            <span class= "c-p"  id="delete-emp-${index}">Delete</span>
                                                            </div>
       </td>
         </tr>`;
        });
      
        document.getElementById("employee-table").innerHTML = rows_tr;
        attachEventListeners(dataEmployess);

      }
     function attachEventListeners(dataEmployess){
      dataEmployess.forEach(function(ele, index) {
        document.getElementById('check-' + index).addEventListener('click', function() {
          handleSingleCheckbox(this, index);
        });
        document.getElementById(`show-ellipses-${index}`).addEventListener('click', function(event) {
            handleEllipsis(event, index);
        });
        document.getElementById(`edit-emp-${index}`).addEventListener('click',()=>{
          handleEditEmp(index);
        })
        document.getElementById(`delete-emp-${index}`).addEventListener('click',()=>{
          require(['handleDelete'],function(deleteEllipses){
            deleteEllipses(index)
        })
        })



    });
     }
      function handleSingleCheckbox(e, index) {
        if (document
          .getElementById(`check-${index}`)
          .classList.contains("checkbox-active")
        ) {
          document
            .getElementById(`check-${index}`)
            .classList.remove("checkbox-active");
        } else {
          document.getElementById(`check-${index}`).classList.add("checkbox-active");
        }
        e.checked ? (s += 1) : (s -= 1);
        console.log(s)
        if (s > 0) {
          document.getElementById("btn-delete-active").classList.add("btn-active");
        } else {
          document.getElementById("btn-delete-active").classList.remove("btn-active");
        }
        if (s == dataEmployess.length) {
          document.getElementById("inp-check-box").checked = true;
        } else {
          document.getElementById("inp-check-box").checked = false;
        }
      }
      function handleEllipsis(event, id){
        event.stopPropagation();
        const ellipsisArray = document.getElementsByClassName("ellipsis");
        for (let i = 0; i < ellipsisArray.length; i++) {
          if (i != id && !ellipsisArray[i].classList.contains("d-none")) {
            ellipsisArray[i].classList.toggle("d-none");
          }
        }
        document.getElementById(`ellipsis-table-${id}`).classList.toggle("d-none");
      };
      const handleEditEmp = (idx) => {
        localStorage.setItem("updateEmp", JSON.stringify(dataEmployess[idx]));
        window.location.href = "./addEmp.html";
      };
      
      return{
        displayTable:displayTable,
      }
    
});

