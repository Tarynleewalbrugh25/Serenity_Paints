//footer
let date = document.querySelector('[Year]')
date.textContent = new Date().getFullYear()

let products = JSON.parse(localStorage.getItem('product')) || [
    {
        id: 1,
        year: 2008,
        make: 'Amy',
        image: "https://i.ibb.co/jG6h9Vy/3.jpg",
        price: 2000,
        description: ''
    },
    {
        id: 2,
        year: 2011,
        make: 'Miles',
        image: "https://i.ibb.co/CbWVr0h/2.jpg",
        price: 35000,
        description: 'Beautiful bird painting'
    },
    {
        id : 3,
        year : 2005,
        make : 'Luke',
        image :"",
        price : 12000,
        description: 'Description for Product 3'
    },
    {
        id : 4,
        year : 2023,
        make : 'Linda',
        image : "",
        price : 22500,
        description: 'Description for Product 4'
    },
    {
        id : 5,
        year : 2013,
        make : 'liam',
        image :"",
        price : 22001,
        description: 'Description for Product 5'
    },
    {
        id : 6,
        year : 2020,
        make : 'Tae',
        image :"",
        price : 1230,
        description: 'Description for Product 5'
    },
    {
        id : 7,
        year : 2018,
        make : 'Rm',
        image :"",
        price : 19949,
        description: 'Description for Product 5'
    },
    {
        id : 8,
        year : 2021,
        make : 'Jin',
        image :"",
        price : 92124,
        description: 'Description for Product 5'
    },
    {
        id : 9,
        year : 2015,
        make : 'Sug',
        image :"",
        price : 9303,
        description: 'Description for Product 5'
    },
    {
        id : 10,
        year : 1999,
        make : 'hope',
        image :"",
        price : 22001,
        description: 'Description for Product 5'
    }
]
let pay = JSON.parse(localStorage.getItem('pay')) || []
localStorage.setItem('product', JSON.stringify(products));
let productWrapper = document.querySelector('[data-products]');
let searchProduct = document.querySelector('[search]')
let btnSort = document.querySelector('[cat]')
let btnCart = document.getElementsByClassName('btn btn-primary')


function displayProducts() {
    productWrapper.innerHTML = "";
    products.forEach(product => {
        productWrapper.innerHTML += `
              <div class="col">
            <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.id}">
            <div class="card-body">
            <h5 class="card-title">${product.make}</h5>
            <p class="card-text">${product.price}</p>
            </div>
              <div class="card-footer">
              <button type='button' class="btn btn-primary" onclick='addToPay(${JSON.stringify(product)})'>Cart</button>
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
//sort function
let toggle = false;
btnSort.addEventListener('click', function () {
    if(!toggle) {
        let sorted = products.sort( (a, b)=>{
            return a.price - b.price
        }) 
        sortingProducts(sorted)
        btnSort.textContent = '>'
        toggle = true
    }else {
        let sorted = products.sort( (a, b)=>{
            return b.price - a.price
        }) 
        sortingProducts(sorted)
        btnSort.textContent = '<'
        toggle = false
    }


});

function sortingProducts(sorted) {
    productWrapper.innerHTML = ""
    sorted.forEach(product => {
        productWrapper.innerHTML += `
            <div class="card m-3">
                <img src="${product.image}" class="card-img-top" alt="${product.id}">
                <div class="card-body">
                    <h5 class="card-title">${product.make}</h5>
                    <p class="card-text">${product.price}</p>
                    
                    <button data-buy class="btn btn-info">Cart</button>
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


