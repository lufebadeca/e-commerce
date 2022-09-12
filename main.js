const emailMenu = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.burger-menu');
const cartLogo = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const checkoutOrder = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
cartLogo.addEventListener('click', toggleProductDetail);

console.log("JS added");

function toggleDesktopMenu(){
    //desktopMenu.classList.add('active');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('function for mobile menu');
    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
    console.log('function for productdetail');
    checkoutOrder.classList.toggle('inactive');
}