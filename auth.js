// Login/Register Toggle Logic
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authHeading = document.getElementById('auth-heading');

if (loginBtn && registerBtn && loginForm && registerForm && authHeading) {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    registerForm.classList.remove('active');
    authHeading.textContent = 'Login to Anime World';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
  });

  registerBtn.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    loginForm.classList.remove('active');
    authHeading.textContent = 'Register to Anime World';
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
  });
}

const loginFormSubmit = document.getElementById('login-form');
if (loginFormSubmit) {
  loginFormSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html';
  });
}

const registerFormSubmit = document.getElementById('register-form');
if (registerFormSubmit) {
  registerFormSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html';
  });
}
