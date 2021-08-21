// function for price of every product 
function priceOfProduct(priceId, price) {
    const productCost = document.getElementById(priceId + "-Cost");
    productCost.innerText = parseInt(price);
    calculateTotal();
}
// calculation Total
function calculateTotal() {
    const memoryCost = parseInt(document.getElementById("Extra-Memory-Cost").innerText);
    const ssdCost = parseInt(document.getElementById("Extra-Storage-Cost").innerText);
    const deliveryCost = parseInt(document.getElementById("Delivery-Cost").innerText);
    const bestPrice = parseInt(document.getElementById("Best-price").innerText);
    const totalPrice = document.getElementById("Total-Price");
    const total = document.getElementById("Total");
    totalPrice.innerText = memoryCost + ssdCost + deliveryCost + bestPrice;
    total.innerText = totalPrice.innerText;

}

// memory
document.getElementById("memory-solt-8gb").addEventListener("click", function () {
    priceOfProduct("Extra-Memory", 0);

})
document.getElementById("memory-solt-16gb").addEventListener("click", function () {
    priceOfProduct("Extra-Memory", 180);
})

// ssd
document.getElementById("ssd-solt-256gb").addEventListener("click", function () {
    priceOfProduct("Extra-Storage", 0);
})
document.getElementById("ssd-solt2-512gb").addEventListener("click", function () {
    priceOfProduct("Extra-Storage", 100);
})
document.getElementById("ssd-solt3-1tb").addEventListener("click", function () {
    priceOfProduct("Extra-Storage", 180);
})

// delivery charge
document.getElementById("delivery-free").addEventListener("click", function () {
    priceOfProduct("Delivery", 0)
})
document.getElementById("delivery-charge20").addEventListener("click", function () {
    priceOfProduct("Delivery", 20)
})

// promoCode
document.getElementById("promoBtn").addEventListener("click", function () {
    const promoFlied = document.getElementById("promoCode")
    const totalPrice = document.getElementById("Total-Price");
    const total = document.getElementById("Total");
    const discount = parseInt(total.innerText) * 0.2;
    if (promoFlied.value == "stevekaku") {
        total.innerText = parseInt(totalPrice.innerText) - discount;
    }
    else {
        total.innerText = totalPrice.innerText
    }
    // clear Promo Fleid
    promoFlied.value = ""
})