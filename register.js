let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
  let u = document.getElementById("newUser").value;
  let p = document.getElementById("newPass").value;

  users.push({ username: u, password: p });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Akun dibuat");
  window.location.href = "login.html";
}
