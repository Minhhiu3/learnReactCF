// </---->
document.getElementById("btn1").addEventListener("click", function () {
    console.log("Bạn nhấn Nút 1");
});

document.getElementById("btn2").addEventListener("click", function () {

    console.log("Bạn nhấn Nút 2");
});

document.getElementById("parent").addEventListener("click", function () {

    console.log("Bạn vừa nhấn trong parent");
});
document.getElementById("prd").addEventListener("click", function () {
    event.stopPropagation();
    console.log("Bạn vừa nhấn trong prd");
}, true);


const anchor = document.getElementById('anchor');
anchor.addEventListener("click", function () {
    console.log(`https://www.google.com/`);

})
//lay dl tu form

const userName = document.getElementById('userName');
const password = document.getElementById('password');

const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function () {
    //cach 1
    //  const userIn4 = {
    //      userName: userName.value,
    //      password: password.value
    //  }

    //cach 2
    const formData = new FormData(loginForm);
    console.log(formData);
    const userIn4 = Object.fromEntries(formData);
    event.preventDefault();

    //call api
    console.log(userIn4);
    console.log(this);

    this.reset();
});






