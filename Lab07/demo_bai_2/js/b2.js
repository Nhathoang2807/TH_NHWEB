let quantityElement = document.getElementById('quantity');
let totalPriceElement = document.getElementById('total');
console.log(quantityElement.value,totalPriceElement)
let basePrice = 76.300;
const updateTotal =(() => {
    let quantity = quantityElement.value;
    if(isNaN(quantity) || quantity > 0) {
        let totalPrice = parseFloat(quantity * basePrice).toFixed(3);
        totalPriceElement.textContent = `${totalPrice}đ`
    }
    else
    {
        totalPriceElement.textContent =`0đ`
    }
})

quantityElement.addEventListener('input',updateTotal());