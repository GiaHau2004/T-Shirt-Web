document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        $("#header").load("/root/includes/header.html");
    });
    $(function(){
        $("#banner").load("/root/includes/banner.html");
    })
    $(function(){
        $("#product").load("/root/includes/product.html");
    })
    $(function(){
        $("#advertisement").load("/root/includes/advertisement.html");
    })

});