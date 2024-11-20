const facts = [
    "I am 18 years old.",
    "I love cycling and often explore new trails.",
    "I enjoy reading a variety of books.",
    "I know how to cook several dishes.",
    "I am learning to play basketball."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
