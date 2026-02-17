function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");

    const risk = analyzeRisk(text);
    const emotion = detectEmotion(text);

    if (risk === "alto") {
        activateCrisisProtocol();
        addMessage("Tu bienestar es importante. Te recomiendo buscar apoyo profesional.", "bot");
    } else {
        const response = generateResponse(emotion);
        addMessage(response, "bot");
    }

    input.value = "";
}

function addMessage(text, sender) {
    const chat = document.getElementById("chatContainer");
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}
