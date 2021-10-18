// Carousel
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
        
        // window.alert(`product_id_1 Quantity:${itemOneQuantity} Total:${total} Discount:${discount} TotalWDiscount:${totalWithDiscount}`);
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
        
        // window.alert(`product_id_2 Quantity:${itemTwoQuantity} Total:${total} Discount:${discount} TotalWDiscount:${totalWithDiscount}`);
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
        
        // window.alert(`product_id_3 Quantity:${itemThreeQuantity} Total:${total} Discount:${discount} TotalWDiscount:${totalWithDiscount}`);
    } else {
        window.alert("0 items selected. Cannot add to cart");
    }
}




