var fontN = document.createElement("div");
fontN.innerHTML = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">`;

document.head.appendChild(fontN);

function mkaco(){
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var valid = true
  if (username == null || username.length <= 3){
    valid = false
  }if (password == null || password.length <= 3){
    valid = false
  }
  if(valid){
    console.log(localStorage.getItem("users.json"))
  }
}