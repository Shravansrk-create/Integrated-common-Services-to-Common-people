document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple client-side validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulated login process
    if (username === 'shravan' && password === '2024') {
        alert('Login successful!');
        // Redirect to a different page or perform any other action on successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
