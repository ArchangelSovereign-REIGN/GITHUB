function showJoinMessage() {
    alert('Welcome to Archangel Sovereigns! Send us a message to join the clan.');
}

document.querySelectorAll('#join-btn, #join-btn-2').forEach(function(button) {
    button.addEventListener('click', showJoinMessage);
});