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
        id : 3,
        year : 2023,
        make : 'Luke',
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
        year : 2023,
        make : 'liam',
        image :"https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price : 22001,
        description: 'Description for Product 5'
    },
    {
        id : 6,
        year : 2023,
        make : 'Tae',
        image :"https://i.postimg.cc/tgsxCCMK/4-23-4-22-8-4-13m.jpg",
        price : 1230,
        description: 'Description for Product 5'
    },
    {
        id : 7,
        year : 2023,
        make : 'Rm',
        image :"https://i.postimg.cc/QCcXTsTH/360-F-273227473-N0-WRQu-X3u-ZCJJxl-HKYZF44ua-JAkh2x-LG.jpg",
        price : 19949,
        description: 'Description for Product 5'
    },
    {
        id : 8,
        year : 2023,
        make : 'Jin',
        image :"https://i.postimg.cc/1thCSTzZ/5-Small-but-Famous-Oil-Paintings-3h23gx8wfeu51t7jyudedm.jpg",
        price : 92124,
        description: 'Description for Product 5'
    },
    {
        id : 9,
        year : 2023,
        make : 'Sug',
        image :"https://i.postimg.cc/k4LfspkH/9525299-SNGKTDKW-7.jpg",
        price : 9303,
        description: 'Description for Product 5'
    },
    {
        id : 10,
        year : 2023,
        make : 'hope',
        image :"https://i.postimg.cc/MK1fvFtG/acrylics-balcony-cat-large.webp",
        price : 22001,
        description: 'Description for Product 5'
    }
]
localStorage.setItem('products', JSON.stringify(products));
let btnDel = document.querySelector('[editing]')



function displayProducts() {
    let pTable = document.getElementsByClassName('table')
    let tbody = document.querySelector('[table-products]')
    tbody.innerHTML = ""
    products.forEach(product => {
        let row = tbody.insertRow()
        tbody.innerHTML += `
              <table class="table table-sm">
                   <td>${product.id}</td>
                   <td>${product.make}</td>
                   <td>${product.year}</td>
                   <td>${product.price}</td>
                   <td>
                      <button type="button" class="btn btn-info" updating >Update</button>
                      <button type="button" class="btn btn-dark" deleted >Delete</button>
                   </td>
              </table>
                
        `;
    });
}
displayProducts();
 
function taking(id) {
    let idProduct = products.findIndex(product => product.id ===id)
    if(idProduct !== -1){
        products.splice(products, 1)
    }
   displayProducts()
}





































