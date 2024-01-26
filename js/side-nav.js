let menuBtn = document.getElementById("menuBtn")
let sidenav = document.getElementById("sidenav")
sidenav.style.right = "-100%"

function show() {
  if (sidenav.style.right == "-100%") {
    sidenav.style.right = "0%"
  }
  else {
    sidenav.style.right = "-100%"
  }
}

  
