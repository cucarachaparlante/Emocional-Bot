function addMessage(message, sender) {
    const chatContainer = document.getElementById("chatContainer");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user");
    } else {
        messageDiv.classList.add("bot");
    }

    messageDiv.textContent = message;

    chatContainer.appendChild(messageDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleSend() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (!text) return;

    const emotion = detectEmotion(text);
    const risk = analyzeRisk(text);
    const response = generateResponse(emotion);

    addMessage(text, "user");
    addMessage(response, "bot");

    if (risk === "alto") {
        showCrisisAlert();
    }

    input.value = "";
}
