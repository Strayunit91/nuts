document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const recoverySection = document.getElementById("recoverySection");

  // Переключение форм
  window.showRegistration = function () {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    recoverySection.style.display = "none";
  };

  window.showLogin = function () {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    recoverySection.style.display = "none";
  };

  window.goBackToLogin = function () {
    recoverySection.style.display = "none";
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  };

  // Обработчик "Восстановить"
  const recoverLink = document.getElementById("recoverLink");
  if (recoverLink) {
    recoverLink.addEventListener("click", function () {
      loginForm.classList.add("hidden");
      registerForm.classList.add("hidden");
      recoverySection.style.display = "block";
    });
  }

  // Регистрация
  window.register = function () {
    const name = document.getElementById("reg-name").value;
    const phone = document.getElementById("reg-phone").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const repeat = document.getElementById("reg-password-repeat").value;

    if (password !== repeat) {
      alert("Пароли не совпадают!");
      return;
    }

    const user = { name, phone, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Регистрация прошла успешно!");
    showLogin();
  };

  // Вход
  window.login = function () {
    const emailOrPhone = document.getElementById("login-user").value;
    const password = document.getElementById("login-password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      (user.email === emailOrPhone || user.phone === emailOrPhone) &&
      user.password === password
    ) {
      alert("Вход выполнен!");
      window.location.href = "main-menu.html";
    } else {
      alert("Неверные данные для входа.");
    }
  };

  // Восстановление пароля – эмуляция
  window.sendRecoveryCode = function () {
    const phone = document.getElementById("recoveryPhone").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.phone === phone) {
      alert("Код: 123456 (эмуляция)");
    } else {
      alert("Пользователь с таким номером не найден.");
    }
  };

  window.verifyRecoveryCode = function () {
    const code = document.getElementById("recoveryCode").value;

    if (code === "123456") {
      alert("Код принят. Выполнен вход.");
      window.location.href = "main-menu.html";
    } else {
      alert("Неверный код.");
    }
  };

  function goBackToLogin() {
  document.getElementById('recoverySection').style.display = "none";
  document.getElementById('login-form').classList.remove('hidden');
}
});
