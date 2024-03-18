let isNavHidden = true;
function hideNavBar(): void {
  document.querySelector(".vertical-page")?.classList.toggle("w-100");
  document.getElementById("side-nav-bar")?.classList.toggle("hide-navbar");
  document.getElementById("hide-install-box")?.classList.toggle("hide-install");
  document.getElementById("nav-hide-logo")?.classList.toggle("trim-logo");
  let navTextArray = document.getElementsByClassName("nav-text");
  let navTextVhArray = document.getElementsByClassName("nav-text-vh");
  navTextVhArray[0].classList.add("hide-vh");
  navTextVhArray[1].classList.add("hide-vh");
  if (isNavHidden) {
    isNavHidden = false;
    for (let i = 0; i < navTextArray.length; i++) {
      navTextArray[i].className += " hide-text";
    }
  } else {
    navTextVhArray[0].classList.remove("hide-vh");
    navTextVhArray[1].classList.remove("hide-vh");
    isNavHidden = true;
    for (let i = 0; i < navTextArray.length; i++) {
      navTextArray[i].classList.remove("hide-text");
    }
  }

  document.getElementById("close-btn")?.classList.toggle("rotate-arrow");
}

//   export {hideNavBar};
