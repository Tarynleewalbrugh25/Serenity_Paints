
let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 1,
        year: 2008,
        Artist: 'Amy',
        image: "https://i.postimg.cc/xTJLZnxJ/360-F-76809767-Gb6-A91-Jm9-Dvd-Fe6-Uu-UHQkzhc-Uy-Yj-ZCJf.jpg",
        price: 2000,
        description: ''
    },
    {
        id: 2,
        year: 2011,
        Artist: 'Miles',
        image: "https://i.postimg.cc/sfGCxVYc/abstract-colorful-oil-acrylic-painting-600nw-2259644567.webp",
        price: 35000,
        description: 'Beautiful bird painting'
    },
    {
        id : 3,
        year : 2005,
        Artist : 'Luke',
        image :"https://i.postimg.cc/2jQT2MrY/portraits.jpg",
        price : 12000,
        description: 'Description for Product 3'
    },
    {
        id : 4,
        year : 2023,
        make : 'Linda',
        image : "https://i.postimg.cc/bryn669Y/River-Landscape-canvas-oil-Adriaen-van-de-1663.webp",
        price : 22500,
        description: 'Description for Product 4'
    },
    {
        id : 5,
        year : 2013,
        Artist : 'liam',
        image :"https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price : 22001,
        description: 'Description for Product 5'
    }
    //{
    //    id : 6,
    //    year : 2020,
    //    Artist : 'Tae',
    //    image :"https://i.postimg.cc/tgsxCCMK/4-23-4-22-8-4-13m.jpg",
    //    price : 1230,
    //    description: 'Description for Product 5'
    //},
    //{
    //    id : 7,
    //    year : 2018,
    //    Artist : 'Rm',
    //    image :"https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
    //    price : 19949,
    //    description: 'Description for Product 5'
    //},
    //{
    //    id : 8,
    //    year : 2021,
    //    Artist : 'Jin',
    //    image :"https://i.postimg.cc/1thCSTzZ/5-Small-but-Famous-Oil-Paintings-3h23gx8wfeu51t7jyudedm.jpg",
    //    price : 92124,
    //    description: 'Description for Product 5'
    //},
    //{
    //    id : 9,
    //    year : 2015,
    //    Artist : 'Sug',
    //    image :"https://i.postimg.cc/k4LfspkH/9525299-SNGKTDKW-7.jpg",
    //    price : 9303,
    //    description: 'Description for Product 5'
    //},
    //{
    //    id : 10,
    //    year : 1999,
    //    Artist : 'hope',
    //    image :"https://i.postimg.cc/MK1fvFtG/acrylics-balcony-cat-large.webp",
    //    price : 22001,
    //    description: 'Description for Product 5'
    //}
]
let pay = []
localStorage.setItem('products', JSON.stringify(products));
let productWrapper = document.querySelector('[data-products]');
let searchProduct = document.querySelector('[search]')
let btnSort = document.querySelector('[cat]')
let btnCart = document.getElementsByClassName('btn btn-primary')


function displayProducts() {
    productWrapper.innerHTML = "";
    products.forEach(product => {
        productWrapper.innerHTML += `
            <div class="card m-3">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <h5 class="card-title">${product.Artist}</h5>
                    <p class="card-text">${product.price}</p>
                    <button type='button' class="btn btn-primary" onclick='addToPay(${JSON.stringify(product)})'>Cart</button>
                    <div class="spinner-border m-5" role="status">
                     <span class="visually-hidden">Loading...</span>
                     </div>
                    </div>
            </div>
        `;
    });
}
displayProducts();
//function for search 
searchProduct.addEventListener('keyup', () => {
    try {
        let searchItem = products.filter(prod => {
            return prod.make.toLowerCase().includes(searchProduct.value.toLowerCase());
        });
        
        if (searchItem.length > 0) {
            productWrapper.innerHTML = ""; 

            searchItem.forEach(item => {
                productWrapper.innerHTML += `
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.id}">
                        <div class="card-body">
                            <h5 class="card-title">${item.Artist}</h5>
                            <p class="card-text">${item.price}</p>
                            <button class="btn btn-primary"onclick='addToPay(${JSON.stringify(product)})>Cart</button>
                        </div>
                    </div>
                `;
            });
        } else {
            displayProducts();
        }
    } catch (error) {
        console.error(error);
    }
});

searchProduct.addEventListener('keyup', () => {
    try {
        let searchItem = products.filter(prod => {
            return prod.make.toLowerCase().includes(searchProduct.value.toLowerCase());
        });
        
        if (searchItem.length > 0) {
            sortingProducts(searchItem);
        } else {
            sortingProducts(products);
        }
    } catch (error) {
        console.error(error);
    }
});

let toggle = false;
btnSort.addEventListener('click', function () {
    if(!toggle) {
        let sorted = products.sort( (a, b)=>{
            return a.price - b.price
        }) 
        sortingProducts(sorted)
        btnSort.textContent = 'Sorting price from highest'
        toggle = true
    }else {
        let sorted = products.sort( (a, b)=>{
            return b.price - a.price
        }) 
        sortingProducts(sorted)
        btnSort.textContent = 'Sorting price from lowest'
        toggle = false
    }


});

function sortingProducts(sorted) {
    productWrapper.innerHTML = ""
    sorted.forEach(product => {
        productWrapper.innerHTML += `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <h5 class="card-title">${product.make}</h5>
                    <p class="card-text">${product.price}</p>
                    <button data-buy>Cart</button>
                </div>
            </div>
        `;
    });
}


function addToPay(item) {
    console.log(item);
    if(item){
        pay.push(item)
        localStorage.setItem('pay', JSON.stringify(pay));
    }
}


