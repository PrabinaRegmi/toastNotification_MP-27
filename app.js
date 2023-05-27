const button = document.querySelector(".button");
const toasts = document.querySelector(".toasts");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];
const types = ["success", "error", "info"];

button.addEventListener("click", () => getNotification());

function getNotification(message = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());
  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
