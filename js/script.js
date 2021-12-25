
function openMenu() {
    let x = document.getElementById("sideBar");
    let y = document.getElementById("nav-overlay");


    if (x.style.left === "-60%") {
        x.style.left = "0";
        y.style.display = "block";
    } else {
        x.style.left = "-60%"
        y.style.display = "none";
    }

}

function closeMenu() {
    document.getElementById("sideBar").style.left = "-60%";
    document.getElementById("nav-overlay").style.display = "none";

}

