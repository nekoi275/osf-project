import $ from 'jquery';
import slick from 'slick-carousel';

function initTopSlider() {
    $('#top-slider-container').slick({
        dots: true,
        appendDots: $('#top-slider-container'),
        infinite: true,
        arrows: false
    });
};

function initFeaturedSlider() {
    $('#featured-products-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: false
    });
};

function initPopularProductsSlider() {
    $('#popular-products-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        draggable: true,
        variableWidth: true,
        centerMode: true
    });
};

export { initTopSlider, initFeaturedSlider, initPopularProductsSlider };
