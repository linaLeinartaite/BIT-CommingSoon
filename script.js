
const floatLabel = document.getElementById('floatLabel');
const floatContainer = document.getElementById('floatContainer');

// on focus we do add a class .active to floatContainer which makes label to get smaler(scale) and move away from input field
floatLabel.addEventListener('focus', () => {
    floatContainer.classList.add('active');
});

// floatLabel.addEventListener('blur', () => {
//     floatContainer.classList.remove('active');
// });

  floatLabel.addEventListener('blur', () => {
    if (floatLabel.value) 
        return;
        else {
        floatContainer.classList.remove('active');
      }
});

// floatContainer.onload = function() {clear()};
// function clear() {
//     floatLabel.value == "";
// }

const body = document.getElementById('top');

//this load event does not work!!!
//What kind of event is used for reloading???????
body.addEventListener("load", () => {
    console.log('onload',floatLabel.value);
});