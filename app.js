let body = document.querySelector('body');
body.addEventListener('click', () => {
    let box = document.querySelector('.box');
    box.classList.toggle('active');

    let heading = document.getElementById('yellow');
    heading.classList.toggle('yellow');

    let span = document.getElementById('white1');
    span.classList.toggle('white1');

    let p = document.getElementById('white2');
    p.classList.toggle('white2');
})