const highRiskKeywords = [
    "suicid",
    "matarme",
    "hacerme daño",
    "no quiero vivir",
    "cortarme",
    "terminar con todo",
    "quiero desaparecer"
];

function analyzeRisk(text) {
    text = text.toLowerCase();

    for (let keyword of highRiskKeywords) {
        if (text.includes(keyword)) {
            return "alto";
        }
    }

    return "bajo";
}
