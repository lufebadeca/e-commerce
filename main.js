const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

console.log("JS added");

function toggleDesktopMenu(){
    //desktopMenu.classList.add('active');
    desktopMenu.classList.toggle('inactive');
}