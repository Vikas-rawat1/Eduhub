// LOGIN VALIDATION

function loginValidation() {
  let username = document.getElementById("loginname").value;
  let userpass = document.getElementById("loginpass").value;

  if (username == "" || userpass == "") {
    alert(`Please fill the username and password`);
    return false;
  } else {
    alert(`Successfully LoggedIn as ${username}`);
  }
}

// REGISTRATION VALIDATION

function registerValidation() {
  let username = document.getElementById("uname").value;
  let userpass = document.getElementById("upass").value;
  let confirmpass = document.getElementById("ucpass").value;

  if (username == "" || userpass == "" || confirmpass == "") {
    alert(`Please fill the username and password`);
    return false;
  } else if (userpass != confirmpass) {
    alert(`Confirm Password did not match `);
    document.getElementById('ucpass').focus()
    document.getElementById('ucpass').select()
    return false;
  } else {
    alert(`Registered as ${username}`);
  }
}
