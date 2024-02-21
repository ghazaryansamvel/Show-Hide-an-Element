let showButton = document.querySelector('.showButton');
let hideButton = document.querySelector('.hideButton');
let hiddenElement = document.querySelector('.hiddenElement');

showButton.addEventListener('click', function () {
    hiddenElement.style.display = 'block';
});

hideButton.addEventListener('click', function () {
    hiddenElement.style.display = 'none';
});