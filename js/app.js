// amardeep kesharwani
let product = {};
let name, number, email;

$(window).on('load', function () {
    setData();
})
$(document).ready(function () {
    $(".view").click(function (e) {
        const id = e.target.getAttribute("data-id");
        product = products.find(p => p.id == id);
        $(".sec1").hide();
        $(".sec2").fadeIn();
        $(".img").attr("src", product.image);
        $(".dis").text(product.discount + "%")
        $(".pro-name").text(product.name);
        $(".price").text("Rs. " + product.price);
        $(".description").text(product.description)
    });
    $(".buy-now").click(function (e) {
        const id = e.target.getAttribute("data-id");
        product = products.find(p => p.id == id);
        $(".sec1").hide();
        $(".sec3").fadeIn();
    });
    $(".signin").click(function () {
        $(".sec1").hide();
        $(".sec3").fadeIn();
    });
    $(".cancel").click(function () {
        $(".sec2").hide();
        $(".sec1").fadeIn();
    });
    $(".buy").click(function () {
        $(".sec2").hide();
        $(".sec3").fadeIn();
    });
    $(".close").click(function () {
        $(".sec3").hide();
        $(".sec1").fadeIn();
    });
  
    $(".bar").click(function () {
        $(".sidebar").toggleClass('active');
    });
    $(".close-sidebar").click(function () {
        $(".sidebar").removeClass('active');
    });
    $("#form").submit(function (e) {
        e.preventDefault();
        name = $("#name").val();
        number = $("#number").val();
        address = $("#address").val();
        $(".sec3").hide();
        if (!product.name) {
            $(".sec1").fadeIn();
            return;
        }
        $(".sec4").fadeIn();
        $(".u-name").text(name);
        $(".u-number").text(number);
        $(".u-address").text(address);

        $(".d-img").attr("src", product.image);
        $(".d-name").text(product.name);
        $(".d-price").text("Rs." + product.price);

    });

    $(".checkout").click(function () {
        $(".sec4").hide();
        $(".sec5").fadeIn();
        $(".user-name").text(name);
    });
    $(".home").click(function () {
        $(".sec5").hide();
        $(".sec1").fadeIn();
        product = {};
    });
})

function addProduct(data) {
    const div = `
  <div class="product">
  <img src="${data.image}" alt="" >
  <div class="product-details" >
  <p>${data.name}</p>
  <h4>Rs. ${data.price} <del>${Math.floor(data.price * 100 / (100 - data.discount))}</del></h4>
  <span class="discount">${data.discount}% off</span>
  </div>
   <div class="views" >
    <button class="view" data-id="${data.id}">View</button>
    <button class="buy-now" data-id="${data.id}">Buy</button>
   </div>
  </div>
 `;
    $(".product-list").append(div);
}

function setProduct() {
    products.forEach(product => addProduct(product))
}
setProduct()

