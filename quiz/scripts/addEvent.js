window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!'));
    x.addEventListener('click', myFunction('Clicked!'));
    x.addEventListener('mouseout', myFunction('Moused out!'));
}

function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}
