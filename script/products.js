
let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 'product1',
        title: '',
        year: 2023,
        make: 'Amy',
        image: "https://i.postimg.cc/xTJLZnxJ/360-F-76809767-Gb6-A91-Jm9-Dvd-Fe6-Uu-UHQkzhc-Uy-Yj-ZCJf.jpg",
        price: 2000,
        description: 'Description for Product 1'
    },
    {
        id: 'product2',
        title: '',
        year: 2023,
        make: 'Miles',
        image: "https://i.postimg.cc/sfGCxVYc/abstract-colorful-oil-acrylic-painting-600nw-2259644567.webp",
        price: 35000,
        description: 'Beautiful bird painting'
    },
    {
        id : 'product3',
        title: '',
        year : 2023,
        make : 'Luke',
        image :"https://i.postimg.cc/2jQT2MrY/portraits.jpg",
        price : 12000,
        description: 'Description for Product 3'
    },
    {
        id : 'product4',
        title: '',
        year : 2023,
        make : 'Linda',
        image : "https://i.postimg.cc/bryn669Y/River-Landscape-canvas-oil-Adriaen-van-de-1663.webp",
        price : 22500,
        description: 'Description for Product 4'
    },
    {
        id : 'product5',
        title: '',
        year : 2023,
        make : 'liam',
        image :"https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price : 22001,
        description: 'Description for Product 5'
    }
]
localStorage.setItem('products', JSON.stringify(products));
let productWrapper = document.querySelector('[data-products]');
let searchProduct = document.querySelector('[search]')
let btnSort = document.querySelector('[cat]')


function displayProducts() {
    productWrapper.innerHTML = "";
    products.forEach(product => {
        productWrapper.innerHTML += `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <h5 class="card-title">${product.make}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary">Cart</button>
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
                            <h5 class="card-title">${item.make}</h5>
                            <p class="card-text">${item.price}</p>
                            <button class="btn btn-primary">Cart</button>
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
                    <button class="btn btn-primary">Cart</button>
                </div>
            </div>
        `;
    });
}





