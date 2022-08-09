let width = screen.width;
var navbarNew = document.createElement("div")
if (width > 500) {
  navbarNew.innerHTML = `<div style="position:absolute; top:6px; left:0.5%; width:70%">
      <a class="navbaritem" href="/">Home</a>
      <a class="navbaritem" href="zone">The Zone</a>
  <a class="navbaritem" href="about">About</a>
  
    </div>
  <div style="position:absolute; top:6px; right:2%; width:30%">
      <a class="navbaritemright" href="account">Profile</a>
  </div>
    <div style="position:absolute; top:0px; left:0px; z-index:-1;" class="navbarsquare"></div><div style="position:absolute;top:-3px"class="dropdown">
    <button onclick="dropdown()" class="dropbtn">Menu</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="/">Home</a>
      <a href="zone">The Zone</a>
      <a href="about">About</a>
      <a href="account">Account</a>
    </div>`;
} else {
  navbarNew.innerHTML = `
</div><div style="position:absolute; top:0px; left:0px; z-index:-1;" class="navbarsquare"></div>`;
}
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.body.appendChild(navbarNew);