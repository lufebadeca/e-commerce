const emailMenu = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.burger-menu');
const cartLogo = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const closeProductViewButton = document.querySelector('.close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productView = document.querySelector('#product-detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
cartLogo.addEventListener('click', toggleProductDetail);
closeProductViewButton.addEventListener('click', closeProductView);


console.log("JS added");

function toggleDesktopMenu(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    //const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    //const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    /*if(isDesktopMenuClosed){  //if checkout is inactive, it'll close others if open, and activate
        if(!isshoppingCartContainerClosed){    //if checkout is open
            toggleProductDetail();
        }
        if(!isMobileMenuClosed){   //if desk menu is open
            toggleMobileMenu();
        }
    }*/
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
function closeProductView(){
    productView.classList.add('inactive');
}
function showProductView(){
    productView.classList.remove('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 400.50,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "200cc enduro Motorbike - AKT",
    price: 2500.00,
    image: "https://progreser.com/wp-content/uploads/2021/10/TTR-200-AKT-NEGRO-Motos-Zoom-ProgreSER.jpg"
});
productList.push({
    name: "Sedan Car - Wolkswagen",
    price: 10000.00,
    image: "https://imgd.aeplcdn.com/600x337/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
});
productList.push({
    name: "Electric Car - Lucid",
    price: 30000.00,
    image: "https://i.insider.com/619283e18e9bfa001986ef4d?width=1200&format=jpeg"
});
productList.push({
    name: "LCD screen - 42",
    price: 200.00,
    image: "https://www.tradeinn.com/f/13778/137786865/dell-monitor-u4320q-4k-42.jpg"
});
productList.push({
    name: "Printer",
    price: 170.00,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477031_sd.jpg"
});
productList.push({
    name: "3D printer",
    price: 500.00,
    image: "https://i.all3dp.com/wp-content/uploads/2017/10/27000303/shoe_in_printer.jpg"
});
productList.push({
    name: "Laptop",
    price: 650.00,
    image: "https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/C/2C3E2LA-1_T1616182322.png"
});
productList.push({
    name: "Desktop",
    price: 700.00,
    image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/desktops-and-all-in-ones/inspiron/24-5415-non-touch/in24-5415-km5221w-csy-00000ff090-gy-fbcspk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=541&qlt=100,0&resMode=sharp2&size=541,402"
});
productList.push({
    name: "Fan",
    price: 70.00,
    image: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1493135-847__1&recipeName=350"
});
productList.push({
    name: "Desktop light",
    price: 100.00,
    image: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_138827611552545656076/13882761_master.jpg?width=240"
});
productList.push({
    name: "Air conditioner",
    price: 700.00,
    image: "https://www.collinsdictionary.com/images/full/airconditioning_271326554_1000.jpg"
});

renderProducts(productList);

const productCard = document.querySelector('.product-card');
productCard.addEventListener('click', showProductView);

function renderProducts(arrayList){
    for (product of arrayList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const div = document.createElement('div');
    
        const price = document.createElement('p');
        price.innerText = "$ " + product.price;
        const name = document.createElement('p');
        name.innerText = product.name;
    
        const figure = document.createElement('figure');
        
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', "./logos/cart.png");
        imgCart.classList.add('shop-logo');
    
        figure.appendChild(imgCart);
        div.appendChild(price);
        div.appendChild(name);
        productInfo.appendChild(div);
        productInfo.appendChild(figure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
