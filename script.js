const messages = document.getElementById("messages");
const input = document.getElementById("input");

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function aiReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! I'm your AI 😎";
  }
  if (text.includes("how are you")) {
    return "I'm just code, but I'm feeling smart 🤖";
  }
  if (text.includes("name")) {
    return "You can name me whatever you want.";
  }
  if (text.includes("bye")) {
    return "Goodbye! Come back soon 👋";
  }

  return "I'm still learning. Try asking something else!";
}

function sendMessage() {
  const text = input.value;
  if (!text) return;

  addMessage("You", text);
  input.value = "";

  setTimeout(() => {
    const reply = aiReply(text);
    addMessage("AI", reply);
  }, 500);
}
