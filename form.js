document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("success-message");

  if (name === "" || email === "") {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  message.classList.remove("hidden");
  this.reset(); // очищаем форму
});
