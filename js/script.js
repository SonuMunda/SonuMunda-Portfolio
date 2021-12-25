
function openMenu() {
    let x = document.getElementById("sideBar");


    if (x.style.left === "-60%") {
        x.style.left = "0";
        document.getElementById("nav-overlay").style.display = "block";
    } else {
        x.style.left = "-60%"
        document.getElementById("nav-overlay").style.display = "none";
    }

}

function closeMenu() {
    document.getElementById("sideBar").style.left = "-60%";
    document.getElementById("nav-overlay").style.display = "none";

}

