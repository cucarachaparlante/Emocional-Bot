function detectEmotion(text) {
    text = text.toLowerCase();

    const patterns = {
        tristeza: ["triste", "deprimido", "deprimida", "sin ganas", "llorar"],
        ansiedad: ["ansiedad", "nervioso", "nerviosa", "preocupado", "preocupada"],
        estrés: ["estres", "estrés", "agotado", "agotada", "cansado", "cansada"],
        enojo: ["enojo", "enojado", "enojada", "molesto", "molesta", "furioso"]
    };

    for (let emotion in patterns) {
        for (let word of patterns[emotion]) {
            if (text.includes(word)) {
                return emotion;
            }
        }
    }

    return "neutral";
}

