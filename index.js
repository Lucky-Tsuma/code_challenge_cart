// Grand total and discounted total for the cart
const totals = {
    "grand_total" : 0.0,
    "totals_with_discount" : 0.0
};

// Items added to the cart
const items = [];

let slidePosition = 1;
let slides = document.getElementsByClassName("container");
let circles = document.getElementsByClassName("dots");

// forward/Back controls
function plusSlides(n) {
    slideShow(slidePosition += n);
}

//  dot controls
function currentSlide(n) {
    slideShow(slidePosition = n);
}

function slideShow(n) {
    
    //   After collecting the carousel images, we make them invisible by default.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //   Disabling all the dots on loading the page
    for (let i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
} 


function getItem1Quantity() {
    let itemOneQuantity = parseInt(document.getElementById("product_id_1").value);
    let total = itemOneQuantity;
    let discount; 
    
    if (itemOneQuantity > 0) {
        
        if (itemOneQuantity > 50) {
            discount = (itemOneQuantity * 0.5).toFixed(2);
        } else if (itemOneQuantity > 25 && itemOneQuantity <= 50) {
            discount = (itemOneQuantity * 0.25).toFixed(2);
        } else if (itemOneQuantity >= 10 && itemOneQuantity <= 25) {
            discount = (itemOneQuantity * 0.10).toFixed(2);
        } else {
            discount = 0;
        }
        
        let totalWithDiscount = total - discount;
        
        // Check if item is in the cart.
        for (item of items) {
            if(item["product_id"] == "Id_1") {
                // item exists
                const response = confirm("This item already exists in the cart. Do you want to update its current information?");
                //  update its current information
                if (response == true) {
                    item["quantity"] = itemOneQuantity;
                    item["total"] = total;
                    item["discount"] = discount;
                    item["total_with_discount"] = totalWithDiscount;
                    return;
                } else {
                    //  do not update the current information
                    return;
                }
                
            }
        }
        
        // Item is not in cart. Add it here.
        const item1 = {
            "product_id" : "Id_1",
            "name" : "Bed 1",
            "quantity" : itemOneQuantity,
            "total" : total,
            "discount" : discount,
            "total_with_discount" : totalWithDiscount
        };
        
        items.push(item1);
        alert("Item added to cart");
        
    } else {
        window.alert("0 items selected. Cannot add to cart");
    }
    
}

function getItem2Quantity() {
    let itemTwoQuantity = parseInt(document.getElementById("product_id_2").value);
    let total = itemTwoQuantity * 3;
    let discount;
    
    if (itemTwoQuantity > 0) {
        
        if (itemTwoQuantity > 50) {
            discount = (itemTwoQuantity * 0.5).toFixed(2);
        } else if (itemTwoQuantity > 25 && itemTwoQuantity <= 50) {
            discount = (itemTwoQuantity * 0.25).toFixed(2);
        } else if (itemTwoQuantity >= 10 && itemTwoQuantity <= 25) {
            discount = (itemTwoQuantity * 0.10).toFixed(2);
        } else {
            discount = 0;
        }
        
        let totalWithDiscount = total - discount;
        
        // Check if item is in the cart.
        for (item of items) {
            if(item["product_id"] == "Id_2") {
                // item exists
                const response = confirm("This item already exists in the cart. Do you want to update its current information?");
                //  update its current information
                if (response == true) {
                    item["quantity"] = itemOneQuantity;
                    item["total"] = total;
                    item["discount"] = discount;
                    item["total_with_discount"] = totalWithDiscount;
                    return;
                } else {
                    //  do not update the current information
                    return;
                }
                
            }
        }
        
        const item2 = {
            "product_id" : "Id_2",
            "name" : "Bed 2",
            "quantity" : itemTwoQuantity,
            "total" : total,
            "discount" : discount,
            "total_with_discount" : totalWithDiscount
        };
        
        items.push(item2);
        alert("Item added to cart");
        
    } else {
        window.alert("0 items selected. Cannot add to cart");
    }
}

function getItem3Quantity() {
    let itemThreeQuantity = parseInt(document.getElementById("product_id_3").value);
    let total = itemThreeQuantity * 5;
    let discount;
    
    if (itemThreeQuantity > 0) {
        
        if (itemThreeQuantity > 50) {
            discount = (itemThreeQuantity * 0.5).toFixed(2);
        } else if (itemThreeQuantity > 25 && itemThreeQuantity <= 50) {
            discount = (itemThreeQuantity * 0.25).toFixed(2);
        } else if (itemThreeQuantity >= 10 && itemThreeQuantity <= 25) {
            discount = (itemThreeQuantity * 0.10).toFixed(2);
        } else {
            discount = 0;
        }
        
        let totalWithDiscount = total - discount;
        
        // Check if item is in the cart.
        for (item of items) {
            if(item["product_id"] == "Id_3") {
                // item exists
                const response = confirm("This item already exists in the cart. Do you want to update its current information?");
                //  update its current information
                if (response == true) {
                    item["quantity"] = itemOneQuantity;
                    item["total"] = total;
                    item["discount"] = discount;
                    item["total_with_discount"] = totalWithDiscount;
                    return;
                } else {
                    //  do not update the current information
                    return;
                }
                
            }
        }
        
        const item3 = {
            "product_id" : "Id_3",
            "name" : "Bed 3",
            "quantity" : itemThreeQuantity,
            "total" : total,
            "discount" : discount,
            "total_with_discount" : totalWithDiscount
        };
        
        items.push(item3);
        alert("Item added to cart");
        
    } else {
        window.alert("0 items selected. Cannot add to cart");
    }
}


function showTotals() {
    for(let x = 0; x < items.length; x++) {
        totals["grand_total"] += items[x]["total"];
        totals["totals_with_discount"] += items[x]["total_with_discount"];
    }
    totals["grand_total"] = totals["grand_total"].toFixed(2);
    totals["totals_with_discount"] = totals["totals_with_discount"].toFixed(2);
    
    let container = document.getElementById("cart_row_con");

    items.map((data) => 
        container.innerHTML += `<div class="cart_row">  
        <span class="item_name">${data.name}</span>
          <span class="quantity">${data.quantity}</span>
          <span class="discount">${data.discount}</span>
          <span class="total">${data.total}</span>
          <span class="discounted_total">${data.total_with_discount}</span>
          </div>`
    );

    container.innerHTML += `<div class="cart_totals">
        <span class="total_no_discount">GRAND TOTAL: ${totals.grand_total}</span>
        <span class="total_discounted">DISCOUNTED TOTAL: ${totals.totals_with_discount}</span>
        </div>`;
    
    document.querySelector(".modal_bg").style.visibility = "visible";
}

function modalClose() {
    document.querySelector(".modal_bg").style.visibility = "hidden";
}

function makeOrder() {
    alert("Order successfully made");
    location.reload();
}

