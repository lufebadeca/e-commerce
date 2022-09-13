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
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    //const isCheckoutOrderClosed = checkoutOrder.classList.contains('inactive');
    //const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    /*if(isDesktopMenuClosed){  //if checkout is inactive, it'll close others if open, and activate
        if(!isCheckoutOrderClosed){    //if checkout is open
            toggleProductDetail();
        }
        if(!isMobileMenuClosed){   //if desk menu is open
            toggleMobileMenu();
        }
    }*/
    mobileMenu.classList.add('inactive');
    checkoutOrder.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    desktopMenu.classList.add('inactive');
    checkoutOrder.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
    const isCheckoutOrderClosed = checkoutOrder.classList.contains('inactive');

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    checkoutOrder.classList.toggle('inactive');
}