//contact
function getPayData() {
    return JSON.parse(localStorage.getItem('pay')) || []
}
function savePayData(PayData) {
    localStorage.setItem('pay',JSON.stringify(PayData))
}
function displayPay() {
    let cartTable = document.getElementById(TableBCART)
    let cartData = getPayData()
    cartTable.innerHTML = ''
    cartData.forEach(product => {
        let row = Document.createElement('td')
        nameCell.textContent = pro
    })


}   

