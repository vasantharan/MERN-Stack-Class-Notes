//addition function
function add() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    const ans = "The answer is " + (Number(a) + Number(b))
    document.getElementsByTagName('p')[0].innerHTML = ans
    document.getElementsByTagName('p')[1].innerHTML = "Second p tag"
}


//email regex
function verify() {
    let email = document.getElementById('email').value
    console.log(email)
    reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!reg.test(email)){
        alert('not a valid email')
    }
    alert('Valid email')
}

//password regex 
function passverify() {
    let pass = document.getElementById('pass').value
    reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if(reg.test(pass)) {
        return alert('valid password')
    }
    alert('Not a valid password')
}

//Form Validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    let valid = true;
    const name = document.getElementById('name').value;
    const namepattern = /^[a-zA-Z]+ [a-zA-Z]+$/
    if (!namepattern.test(name)) {
        document.getElementById('nameError').textContent = 'Name is invalid';
        valid = false;
    }
    const email = document.getElementById('email1').value;
    console.log(email)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); 
    }
    else {
        alert('validated')
    }
});