function check() {
    const emailInput = document.getElementById('email');
    const icon = document.getElementById('icon');
    const message = document.getElementById('message');

    const email = emailInput.value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        icon.textContent = '✅';
        message.textContent = 'Valid email address';
        message.style.color = 'green';
    } else if (email.length === 0) {
        icon.textContent = '';
        message.textContent = '';
    } else {
        icon.textContent = '❌';
        message.textContent = 'Invalid email address';
        message.style.color = 'red';
    }
}
