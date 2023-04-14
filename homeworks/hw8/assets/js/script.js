
var secondHalf = document.getElementById("songs-second-half");

function toggleSongs() {
    secondHalf.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;
