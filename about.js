const facts = ["A robot can follow programmed rules without using artificial intelligence.", "Sensors provide measurements; actuators turn control signals into physical action.", "Machine learning models need evaluation using data separate from their training examples.", "AI can run on a local computer. It does not always require an internet connection."];
let nextFact = 0;
document.getElementById('tip-button').addEventListener('click', () => {
 document.getElementById('tip').textContent = facts[nextFact];
 nextFact = (nextFact + 1) % facts.length;
});
