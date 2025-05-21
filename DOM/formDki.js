
const userName = document.getElementsByName('userName');
const password = document.getElementsByName('password');
const sex = document.getElementsByName('sex');
const major = document.getElementsByName('major');
const checked = document.getElementsByName('checked')
const registerForm = document.getElementById('registerForm');


registerForm.addEventListener('submit', function () {
    //cach 1
    //  const userIn4 = {
    //      userName: userName.value,
    //      password: password.value
    //  }

    //cach 2
    const formData = new FormData(registerForm);
    console.log(formData);
    const userIn4 = Object.fromEntries(formData);
    console.log(major);
    // if (checked === off) {
    //     alert(`chua xac nhan`);
    //     return;
    // }
    event.preventDefault();

    //call api
    console.log(userIn4);
    //console.log(this);

    this.reset();
});

