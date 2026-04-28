function joinDiscord() {
    window.open("https://discord.gg/https://discord.gg/3v23eFj95", "_blank");
}

document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', joinDiscord);
});
