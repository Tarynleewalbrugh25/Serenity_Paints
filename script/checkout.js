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
        <td>${uniqueItems[key].length}
        </td>
        <td>R${uniqueItems[key][0].price}</td>
        <td>R${eval(`${uniqueItems[key][0].price} * ${uniqueItems[key].length}`)}</td>
        <td></td>
        `
     }
    //  payItems.forEach(item => {
   
}
displayPay()



// Function to clear the cart and remove items from the array in localStorage
function clearCart() {
  // Clear the table body
  var tableBody = document.getElementById('TableBCART');
  tableBody.innerHTML = '';

  // Remove the cart data from localStorage
  localStorage.removeItem('cart');
}

// Function to handle the "Pay" action
function pay() {
  // Perform payment process here

  // Retrieve cart data from localStorage
  var cartData = JSON.parse(localStorage.getItem('cart'));

  // Modify the cart data to remove items being purchased (for example, let's remove the first item)
  if (cartData && cartData.length > 0) {
      cartData.shift(); // Remove the first item from the cart array
  }

  // Update the localStorage with the modified cart data
  localStorage.setItem('cart', JSON.stringify(cartData));

  // After successful payment, clear the cart
  clearCart();
}


  // Function to handle payment
  function pay() {
    // Perform payment logic here

    // Assuming you want to display a "Thank you" message after payment
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block'; // Show the message
  }



 