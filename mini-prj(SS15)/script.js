const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const name = emailInput.value;

  const password = passwordInput.value;
  const newUser = {
    name: name,
    password: password,
  };
  console.log(newUser);
});
