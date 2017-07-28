//uses closure concept to display helper Notes
var allInputs = document.querySelectorAll('.form-container p input:not([type="submit"])');
var helperNote = document.querySelector('#helperNote');
allInputs.forEach(function(input) {
    input.addEventListener('focus', callback, false);
    //callback function has acess to input through closures
    function callback() {
        helperNote.textContent = 'Please input the ' + input.name;
        helperNote.style.visibility = 'visible';
    }
    input.addEventListener('blur', blurCallback, false);

    function blurCallback() {
        helperNote.style.visibility = 'hidden';
    }
})


