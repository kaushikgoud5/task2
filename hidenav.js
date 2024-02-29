isNavHidden = true;
function hideNavBar() {
    document.querySelector(".vertical-page").classList.toggle("w-100");
  document.getElementById("side-nav-bar").classList.toggle("hide-navbar");
  document.getElementById("hide-install-box").classList.toggle("hide-install");
  document.getElementById("nav-hide-logo").classList.toggle("trim-logo");
    let x = document.getElementsByClassName("nav-text");
    let y = document.getElementsByClassName("nav-text-vh");
    y[0].classList.add("hide-vh");
    y[1].classList.add("hide-vh");
    let i;
    if (isNavHidden) {
      isNavHidden = false;
      for (i = 0; i < x.length; i++) {
        x[i].className += " hide-text";
      }
    } else {
      y[0].classList.remove("hide-vh");
      y[1].classList.remove("hide-vh");
      isNavHidden = true;
      for (i = 0; i < x.length; i++) {
        x[i].classList.remove("hide-text");
      }
    }
  
    document.getElementById("close-btn").classList.toggle("rotate-arrow");
  }


//   export {hideNavBar};