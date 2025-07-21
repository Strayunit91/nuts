    function showRegistration() {
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('register-form').classList.remove('hidden');
    }

    function showLogin() {
      document.getElementById('register-form').classList.add('hidden');
      document.getElementById('login-form').classList.remove('hidden');
    }

    function register() {
      const name = document.getElementById('reg-name').value;
      const phone = document.getElementById('reg-phone').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const repeat = document.getElementById('reg-password-repeat').value;

      if (password !== repeat) {
        alert("Пароли не совпадают!");
        return;
      }

      const user = { name, phone, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert("Регистрация прошла успешно!");

      showLogin();
    }

    function login() {
      const emailOrPhone = document.getElementById('login-user').value;
      const password = document.getElementById('login-password').value;

      const user = JSON.parse(localStorage.getItem('user'));

      if (user && (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password) {
      window.location.href = "main-menu.html";
        alert("Вход выполнен!");
        // Здесь можно редирект или запуск основного функционала
      } else {
        alert("Неверные данные для входа.");
      }

        
  document.getElementById("recoverLink").addEventListener("click", function () {
    document.getElementById("recoverySection").style.display = "block";
    document.getElementById("loginForm").style.display = "none"; // или registrationForm
  });

