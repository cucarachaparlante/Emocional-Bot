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
