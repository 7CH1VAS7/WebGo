document.getElementById('showMessageButton').addEventListener('click', function() {
    var messageBox = document.getElementById('messageBox');
    messageBox.classList.remove('hidden');
    messageBox.classList.add('show');
});
