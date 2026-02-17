function detectEmotion(text) {
    text = text.toLowerCase();

    if (text.includes("triste")) return "tristeza";
    if (text.includes("ansiedad")) return "ansiedad";
    if (text.includes("estres")) return "estrés";
    if (text.includes("enojo")) return "enojo";

    return "neutral";
}
