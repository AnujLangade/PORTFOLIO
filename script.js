document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple form validation
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            // You can send form data to a server here if needed.
        }
    });
});
