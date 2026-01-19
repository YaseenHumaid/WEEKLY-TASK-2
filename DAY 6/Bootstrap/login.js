const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
  e.preventDefault();

  username.nextElementSibling.classList.add('d-none');
  password.nextElementSibling.classList.add('d-none');

  let valid = true;

  if(username.value.trim() === ''){
    username.nextElementSibling.innerText = 'Username cannot be empty';
    username.nextElementSibling.classList.remove('d-none');
    valid = false;
  }

  if(password.value.trim() === ''){
    password.nextElementSibling.innerText = 'Password cannot be empty';
    password.nextElementSibling.classList.remove('d-none');
    valid = false;
  }

  if(valid){
    if(username.value === 'admin' && password.value === '1234'){
      alert('Login Successful!');
      form.reset();
    } else {
      alert('Invalid username or password!');
    }
  }
});
