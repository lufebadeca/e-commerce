const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);

console.log("JS added");

function toggleDesktopMenu(){
    //desktopMenu.classList.add('active');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('function for mobile menu');
    mobileMenu.classList.toggle('inactive');
}