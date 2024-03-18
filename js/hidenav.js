var isNavHidden = true;
function hideNavBar() {
    var _a, _b, _c, _d, _e;
    (_a = document.querySelector(".vertical-page")) === null || _a === void 0 ? void 0 : _a.classList.toggle("w-100");
    (_b = document.getElementById("side-nav-bar")) === null || _b === void 0 ? void 0 : _b.classList.toggle("hide-navbar");
    (_c = document.getElementById("hide-install-box")) === null || _c === void 0 ? void 0 : _c.classList.toggle("hide-install");
    (_d = document.getElementById("nav-hide-logo")) === null || _d === void 0 ? void 0 : _d.classList.toggle("trim-logo");
    var navTextArray = document.getElementsByClassName("nav-text");
    var navTextVhArray = document.getElementsByClassName("nav-text-vh");
    navTextVhArray[0].classList.add("hide-vh");
    navTextVhArray[1].classList.add("hide-vh");
    if (isNavHidden) {
        isNavHidden = false;
        for (var i = 0; i < navTextArray.length; i++) {
            navTextArray[i].className += " hide-text";
        }
    }
    else {
        navTextVhArray[0].classList.remove("hide-vh");
        navTextVhArray[1].classList.remove("hide-vh");
        isNavHidden = true;
        for (var i = 0; i < navTextArray.length; i++) {
            navTextArray[i].classList.remove("hide-text");
        }
    }
    (_e = document.getElementById("close-btn")) === null || _e === void 0 ? void 0 : _e.classList.toggle("rotate-arrow");
}
//   export {hideNavBar};