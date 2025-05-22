// Toggle between Login and Register forms
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
  });
  
  document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html'; // Redirect to home page
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html'; // Redirect to home page
  });
  // Select buttons and forms
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authHeading = document.getElementById('auth-heading');

// Add event listeners for buttons
loginBtn.addEventListener('click', () => {
  // Update classes
  loginForm.classList.add('active');
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  registerForm.classList.remove('active');

  // Update heading
  authHeading.textContent = 'Login to Anime World';

  // Set active button style
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
  // Update classes
  registerForm.classList.add('active');
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
  loginForm.classList.remove('active');

  // Update heading
  authHeading.textContent = 'Register to Anime World';

  // Set active button style
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});
