import { displayTable } from "./displayTable.js";
import { dataEmployess } from "./loadEmp.js";
export function displayAlphabets() {
  let alpha = "";
  for (let i = 65; i < 91; i++) {
    alpha += `<span id=${i}  class="activate-icon letter">${String.fromCharCode(i)}</span>`;
  }
  document.getElementById("demo").innerHTML = alpha;
  addEventListenersforAlphabets();
}
function addEventListenersforAlphabets(){
  document.querySelectorAll(".letter").forEach((letter)=>{
    letter.addEventListener('click',(e)=>{
      handleClickFilter(e.target.innerText,dataEmployess);
    });
  })
}
let alphabetsFiltered = [];
function handleClickFilter(letter) {   
  let ascciiValue = letter.charCodeAt(0);
  const char = document.getElementById(ascciiValue).innerText;
  const charClassList = document.getElementById(ascciiValue).classList;
  if (charClassList.contains("active")) {
    charClassList.remove("active");
    let filterdArr = alphabetsFiltered.filter((i) =>
      i.user.toUpperCase().startsWith(char)
    );
    for (let i = 0; i < alphabetsFiltered.length; i++) {
      for (let j = 0; j < filterdArr.length; j++) {
        if (alphabetsFiltered[i].user == filterdArr[j].user) {
          alphabetsFiltered.splice(i, 1);
        }
      }
    }
    displayTable(alphabetsFiltered.length == 0 ? dataEmployess : alphabetsFiltered);
  
  } else {
    let isFound = false;
    dataEmployess.forEach((val) => {
      if (val.user.toUpperCase().startsWith(char)) {
        isFound = true;
        alphabetsFiltered.push(val);
      }
    });
    if (!isFound) {
      alert("No data Available");
    } else {
      charClassList.toggle("active");
 
      displayTable([...new Set(alphabetsFiltered)]);
     
    }
  }

  //for changing the filter icon color
  let isActive = false;
  let alphabetsArray = document.getElementsByClassName("activate-icon");
  for (let i = 0; i < alphabetsArray.length; i++) {
    if (alphabetsArray[i].classList.contains("active")) {
      isActive = true;
    }
  }
  if (isActive) {
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter.svg";
  } else {
    document.getElementById("filter-icon").src =
      "http://127.0.0.1:5500/task-2/assets/Interface/filter-black.svg";
  }
}
displayAlphabets();
