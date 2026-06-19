let users = JSON.parse(localStorage.getItem("users")) || [
  { username: "heri", password: "123" },
  { username: "user1", password: "123" }
];

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  let found = users.find(x => x.username === u && x.password === p);

  if (found) {
    alert("Login sukses");
    localStorage.setItem("activeUser", u);
    window.location.href = "../index.html";
  } else {
    alert("Login gagal");
  }
}
