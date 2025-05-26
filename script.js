document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name && email && password) {
    document.getElementById("message").textContent = `Thank you for registering, ${name}!`;
    this.reset();
  } else {
    document.getElementById("message").textContent = "Please fill in all fields.";
  }
});

