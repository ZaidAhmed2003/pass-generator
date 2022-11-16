// Dark-Light Theme Toggler

let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("light-theme"),
    document.body.classList.contains("light-theme")
      ? (icon.src = "./images/dark.svg")
      : (icon.src = "./images/light.svg");
};

// Password Generator

function generatePassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 16;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
