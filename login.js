function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = {
    username: username,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("dang ky thanh cong");
  window.location.href = "login.html";
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (username == data.username && password == data.password) {
    alert("dang nhap thanh cong");
    window.location.href = "home.html";
  } else {
    alert("dang nhap khong thanh cong");
  }
}
