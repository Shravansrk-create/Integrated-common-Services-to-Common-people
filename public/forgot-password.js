document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    
    if(email) {
        // Simulate an API call to reset the password
        setTimeout(function() {
            alert('A password reset link has been sent to ' + email);
            window.location.href = 'index.html';
        }, 1000);
    } else {
        alert('Please enter a valid email address.');
    }
});
