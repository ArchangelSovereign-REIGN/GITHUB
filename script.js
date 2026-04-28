function showJoinMessage() {
alert("Welcome to Archangel Sovereigns! Message us to join.");
}

document.querySelectorAll('.join-btn').forEach(button => {
button.addEventListener('click', showJoinMessage);
});
