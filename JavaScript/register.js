const form = document.getElementById('form');
const Username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn')

function validate() {
    if(Username.value < 3 ){
        alert("Username must be more 3 character!")
        Username.style.outlineColor = 'red';
        Username.focus();
        return false;
    }

    if(email.value < 3 ){
        alert("Email must be more 3 character!")
        email.style.outlineColor = 'red';
        email.focus();
        return false;
    }

    if(password.value < 3 ){
        alert("password must be more 3 character!")
        password.style.outlineColor = 'red';
        password.focus();
        return false;
    }

    return true;
}

form && form.addEventListener('submit', function(event){
    event.preventDefault();
    const isValid = validate();

    if(!isValid){
        return;
    }

    const user = {
        username: Username.value,
        email: email.value,
        password: password.value,
    }

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.message == 'Failed Username  is  already in use!'){

        }
    })
    .catch(err => {
        console.log(err);
    })
})