function validation() {
  let password = document.querySelector("#password").value
  let confirmPassword = document.querySelector("#confirm-password").value
  let errorElement = document.querySelector("#password-error")
  let passwordInput = document.querySelector("#password");
  let confirmPasswordInput = document.querySelector("#confirm-password");

  if (password !== confirmPassword) {
    errorElement.textContent = "*Passwords do not match"

    passwordInput.setCustomValidity("Passwords do not match");
    confirmPasswordInput.setCustomValidity("Passwords do not match");

    return false;
  } else {
    errorElement.textContent = ""

    passwordInput.setCustomValidity("");
    confirmPasswordInput.setCustomValidity("");

    return true;
  }
}
let submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", function (event) {
  if (!validation()) {
    event.preventDefault();

  }
})