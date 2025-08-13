document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('formMessage').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message cannot be empty.';
    isValid = false;
  }

  // Final message
  if (isValid) {
    document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
    document.getElementById('contactForm').reset();
  }
});
