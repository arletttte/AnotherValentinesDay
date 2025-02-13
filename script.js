document.getElementById('surpriseButton').addEventListener('click', function() {
    var surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    var noMessage = document.getElementById('noMessage');
    noMessage.classList.toggle('hidden');
});