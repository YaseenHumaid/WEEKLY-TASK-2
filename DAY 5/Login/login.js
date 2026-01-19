const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
  e.preventDefault(); 

  username.nextElementSibling.style.display = 'none';
  password.nextElementSibling.style.display = 'none';

  let valid = true;

  if(username.value.trim() === ''){
    username.nextElementSibling.innerText = 'Username cannot be empty';
    username.nextElementSibling.style.display = 'block';
    valid = false;
  }

  if(password.value.trim() === ''){
    password.nextElementSibling.innerText = 'Password cannot be empty';
    password.nextElementSibling.style.display = 'block';
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
