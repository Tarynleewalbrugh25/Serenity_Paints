//footer
let date = document.querySelector('[Year]')
date.textContent = new Date().getFullYear()


let payItems = JSON.parse(localStorage.getItem('pay')) || []
let tableBod = document.getElementById('TableBCART')


function displayPay() {
     tableBod.innerHTML = ''
     let uniqueItems = Object.groupBy(payItems, item=> item.id)
     for(let key in uniqueItems) {
        tableBod.innerHTML += 
        `
        <td>${uniqueItems[key][0].id}</td>
        <td>${uniqueItems[key][0].make}</td>
        <td>
            <img loading="lazy" class="img-fluid w-25" src="${uniqueItems[key][0].image}" alt="${uniqueItems[key][0].make}">
        </td>
        <td>${uniqueItems[key].length}</td>
        <td>R${uniqueItems[key][0].price}</td>
        <td>R${eval(`${uniqueItems[key][0].price} * ${uniqueItems[key].length}`)}</td>
        `
     }
    //  payItems.forEach(item => {
   
}
displayPay()
 