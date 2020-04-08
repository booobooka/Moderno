$(function(){
    $(".rate-star").rateYo({
          rating: 5,
          starWidth: "12px",
          readOnly: true
    });
    var mixer = mixitup('.products-inner-container'); 
    $('.product-slider-inner').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    });
});