function generateResponse(emotion) {
    const responses = {
        tristeza: "Lamento que te sientas así. ¿Quieres contarme qué ha pasado?",
        ansiedad: "La ansiedad puede ser abrumadora. Respiremos profundo juntos.",
        estrés: "El estrés académico es común. Podemos buscar estrategias para manejarlo.",
        enojo: "El enojo es válido. Intentemos entender qué lo está causando.",
        neutral: "Estoy aquí para escucharte. ¿Cómo te sientes hoy?"
    };

    return responses[emotion] || responses["neutral"];
}
