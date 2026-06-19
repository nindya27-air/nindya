let users = JSON.parse(localStorage.getItem("users")) || [];

function forgot() {
  let u = document.getElementById("findUser").value;

  let user = users.find(x => x.username === u);

  if (user) {
    alert("Password: " + user.password);
  } else {
    alert("User tidak ditemukan");
  }
}
