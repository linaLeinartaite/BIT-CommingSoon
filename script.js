
const floatLabel = document.getElementById('floatLabel');
const floatContainer = document.getElementById('floatContainer');

// on focus we do add a class .active to floatContainer which makes label to get smaler(scale) and move away from input field
floatLabel.addEventListener('focus', () => {
    floatContainer.classList.add('active');
});

floatLabel.addEventListener('blur', () => {
    floatContainer.classList.remove('active');
});