//footer
let date = document.querySelector('[Year]')
date.textContent = new Date().getFullYear()

let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 1,
        year: 2023,
        make: 'Amy',
        image: "https://i.postimg.cc/xTJLZnxJ/360-F-76809767-Gb6-A91-Jm9-Dvd-Fe6-Uu-UHQkzhc-Uy-Yj-ZCJf.jpg",
        price: 2000,
        description: 'Description for Product 1'
    },
    {
        id: 2,
        year: 2023,
        make: 'Miles',
        image: "https://i.postimg.cc/sfGCxVYc/abstract-colorful-oil-acrylic-painting-600nw-2259644567.webp",
        price: 35000,
        description: 'Beautiful bird painting'
    },
    {
        id: 3,
        year: 2023,
        make: 'Luke',
        image: "https://i.postimg.cc/2jQT2MrY/portraits.jpg",
        price: 12000,
        description: 'Description for Product 3'
    },
    {
        id: 4,
        year: 2023,
        make: 'Linda',
        image: "https://i.postimg.cc/bryn669Y/River-Landscape-canvas-oil-Adriaen-van-de-1663.webp",
        price: 22500,
        description: 'Description for Product 4'
    },
    {
        id: 5,
        year: 2023,
        make: 'liam',
        image: "https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price: 22001,
        description: 'Description for Product 5'
    },
    {
        id: 6,
        year: 2023,
        make: 'Tae',
        image: "https://i.postimg.cc/tgsxCCMK/4-23-4-22-8-4-13m.jpg",
        price: 1230,
        description: 'Description for Product 5'
    },
    {
        id: 7,
        year: 2023,
        make: 'Rm',
        image: "https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price: 19949,
        description: 'Description for Product 5'
    },
    {
        id: 8,
        year: 2023,
        make: 'Jin',
        image: "https://i.postimg.cc/1thCSTzZ/5-Small-but-Famous-Oil-Paintings-3h23gx8wfeu51t7jyudedm.jpg",
        price: 92124,
        description: 'Description for Product 5'
    },
    {
        id: 9,
        year: 2023,
        make: 'Sug',
        image: "https://i.postimg.cc/k4LfspkH/9525299-SNGKTDKW-7.jpg",
        price: 9303,
        description: 'Description for Product 5'
    },
    {
        id: 10,
        year: 2023,
        make: 'hope',
        image: "https://i.postimg.cc/MK1fvFtG/acrylics-balcony-cat-large.webp",
        price: 22001,
        description: 'Description for Product 5'
    }
]
localStorage.setItem('products', JSON.stringify(products));



function displayProducts() {
    // let pTable = document.getElementsByClassName('table')
    let tbody = document.querySelector('[table-products]')
    tbody.innerHTML = ""
    products.forEach((product, index) => {
        tbody.innerHTML += `
              <tr>
                   <td>${product.id}</td>
                   <td>${product.make}</td>
                   <td>
                        <img loading="lazy" class="img-fluid w-25" src="${product.image}" alt="${product.make}">
                   </td>
                   <td>${product.price}</td>
                   <td>
                      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#updateModal${product.id}" >Edit</button>
                      <div class="modal" tabindex="-1" id="updateModal${product.id}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Update Product ${product.id}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                       <div class="form-floating mb-3">
                                         <input type="name" class="form-control" placeholder="make">
                                         <label>Make</label>
                                       </div>
                                       <div class="form-floating">
                                         <input type="year" class="form-control" placeholder"year">
                                         <label>year</label>
                                       </div>
                                       <div class="form-floating mb-3">
                                         <input type="photo" class="form-control" placeholder="Photo">
                                         <label>image</label>
                                       </div>
                                       <div class="form-floating">
                                         <input type="price" class="form-control" placeholder"price">
                                         <label>Price</label>
                                       </div>
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary"onclick='updating(${JSON.stringify(products)})' >Save changes</button>
                                </div>
                            </div>
                        </div>
                        </div>
                      <button type="button" class="btn btn-dark" onclick='taking(${JSON.stringify(index)})'>Delete</button>
                   </td>
              </tr>
                
        `;
    });
}
displayProducts();
//delete function
function taking(id) {

    products.splice(id, 1);
    localStorage.setItem('products', JSON.stringify(products))

    displayProducts()
}

//update function
function updating() {
    let productIndex = products.findIndex(product => product.id === product)
    if(productIndex !== -1) {
        products[productIndex].name = newName
        products[productIndex].price = newPrice
        localStorage.setItem('products', JSON.stringify(products))
        return products[productIndex]
    }else {
        console.log('Product not found');
    }

}





















































































