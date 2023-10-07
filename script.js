document.addEventListener('DOMContentLoaded', function() {
    const matrixBoxes = document.querySelectorAll('.matrix-box');
    const selectedText = document.getElementById('selectedText');

    matrixBoxes.forEach(box => {
        box.addEventListener('click', function() {
            selectedText.textContent = box.textContent;
        });
    });
});
