const user = [
  {
    fname: "dereje",
    lname: "temesgen",
    password: "d12345",
    email: "dere@gmail.com",
  },
  {
    fname: "getu",
    lname: "safu",
    password: "123456",
    email: "getu@gmail.com",
  },
  {
    fname: "israel",
    lname: "hayile",
    password: "Israel1",
    email: "isra@gmail.com",
  },
  {
    fname: "selam",
    lname: "yihun",
    password: "Selam12",
    email: "selam@gmail.com",
  },
];

const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const linked = document.querySelector(".link a");
window.console.log(linked.href);
// console.log(linked)

//helper function1

function checkAccount(fname, lname, em, pass) {
  fname = fname.trim().toLowerCase();
  lname = lname.trim().toLowerCase();
  em = em.trim().toLowerCase();

  let result = user.find(
    (stud) =>
      stud.fname == fname &&
      stud.lname === lname &&
      stud.email === em &&
      stud.password === pass
  );
  return result;
}
//account creating form part
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  doSmome();
});

function doSmome() {
  const email = document.getElementById("email");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const password = document.getElementById("password");
  const repassword = document.getElementById("repassword");
  const error1Password = document.querySelector(".error1");
  const error2Password = document.querySelector(".error2");
  const duplicateAccount = document.querySelector(".duplicate-account");
  const checkFunc = checkAccount(
    fname.value,
    lname.value,
    email.value,
    password.value
  );

  if (fname.value.length < 3) {
    fname.value = "Name characters should be more than three";
    fname.style.backgroundColor = "pink";
  } else if (lname.value.length < 3) {
    lname.value = "Name characters should be more than three";
    lname.style.backgroundColor = "pink";
  } else if (password.value.length < 5) {
    error1Password.classList.remove("hidden");
    error1Password.style.backgroundColor = "pink";
  } else if (password.value !== repassword.value) {
    error2Password.classList.remove("hidden");
    error2Password.style.backgroundColor = "pink";
  } else if (checkFunc) {
    duplicateAccount.classList.remove("hidden");
  } else {
    let StudentData = {
      fname: fname.value,
      lname: lname.value,
      password: password.value,
      email: email.value,
    };
    user.push(StudentData);

    location.replace(" https://bankit-b9b31.web.app");
    // console.log(user)
  }
}

//Login form part
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("user");
  const userPass = document.getElementById("userPassword");
  const showError = document.querySelector(".invalidPass");

  let findByname = user.find(
    (data) => data.email === userEmail.value && data.password === userPass.value
  );

  if (!findByname) {
    showError.classList.remove("hidden");
  } else {
    location.replace(" https://bankit-b9b31.web.app");
  }
});

//helper function2
function hidd() {
  form1.classList.add("hidden");
  form2.classList.remove("hidden");
}
//helper function3
function show() {
  form1.classList.remove("hidden");
  form2.classList.add("hidden");
}
//Already have an account? part
const backinput = document.getElementById("h5");
backinput.onclick = hidd;
//Sign in part
const signIn = document.querySelector(".sign");
signIn.onclick = hidd;
//Don't have an account ? create new Account part
const account = document.querySelector(".account");
account.onclick = show;
//Pass word resetting part
form3.addEventListener("submit", (e) => {
  e.preventDefault();
  const userReset = document.querySelector(".resetUser").value;
  const restPassword = user.find((data) => data.email === userReset);
  if (restPassword) {
    alert(restPassword.password);
  } else {
    alert("Invalid user name");
  }
});
//Aleardy have an account?//which is inside  from3
const restLogin = document.querySelector(".rest-to-lonin");
restLogin.addEventListener("click", (e) => {
  e.preventDefault();
  hidd();
  form3.classList.add("hidden");
});
//Don't have an account?//which is found insid from3
const resToAccount = document.querySelector(".rest-to-account");
resToAccount.addEventListener("click", (e) => {
  e.preventDefault();
  show();
  form3.classList.add("hidden");
  tick();
});
//Password Forgot part
const forgot = document.querySelector(".forgot");
forgot.addEventListener("click", (e) => {
  e.preventDefault();
  form1.classList.add("hidden");
  form2.classList.add("hidden");
  form3.classList.remove("hidden");
});
//timer part
let second = 120;
const timer = document.querySelector(".timer");
let timerText = timer.textContent;

const tick = function () {
  const timerId = setInterval(function () {
    let min = String(Math.trunc(second / 60)).padStart(2, 0);
    let sec = String(second - min * 60).padStart(2, 0);
    timer.innerText = `${timerText} ${min}:${sec}`;
    second--;
    if (second === 50) {
      timer.style.color = "yellow";
    } else if (second === 20) {
      timer.style.color = "red";
    } else if (second == 0) {
      form1.classList.add("hidden");
      timer.classList.add("hidden");
      clearInterval(timerId);
    }
  }, 1000);
};
window.onload = tick;
