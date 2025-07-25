
document.addEventListener("DOMContentLoaded", () => {
  const screens = ["mainMenu", "myChats", "newChat"];
  window.showScreen = function (id) {
    screens.forEach(s => document.getElementById(s).classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  };

  window.sendMessage = function () {
    const input = document.getElementById("messageInput");
    const container = document.getElementById("messagesContainer");
    const msg = input.value.trim();
    if (msg) {
      const div = document.createElement("div");
      div.textContent = msg;
      div.style.padding = "10px";
      div.style.margin = "5px";
      div.style.background = "#4b3d4c";
      div.style.borderRadius = "10px";
      container.appendChild(div);
      input.value = "";
    }
  };

  window.editChatTitle = function () {
    const input = document.getElementById("chatTitleInput");
    input.focus();
  };

  window.attachFile = function () {
    alert("Функция прикрепления работает в полной версии.");
  };

  // Инициализация
  showScreen("mainMenu");
});
