const navIcon = document.querySelector('.nav-icon');
const overlay = document.querySelector('.overlay');
const header  = document.querySelector('header');

navIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    overlay.classList.toggle('show');
    navIcon.classList.toggle('btn-open');
    navIcon.classList.toggle('btn-close');
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    navIcon.classList.remove('btn-open');
    navIcon.classList.add('btn-close');
});


