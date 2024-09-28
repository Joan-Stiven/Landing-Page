document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    toggler.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
    });
});
