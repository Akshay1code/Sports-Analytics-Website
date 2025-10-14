document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Login successful! (Check console for details)');
        // In a real application, you would send this data to a server for authentication.
    } else {
        alert('Please fill in all fields.');
    }
});