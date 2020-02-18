import $ from 'jquery';
import slick from 'slick-carousel';

global.jQuery = $;
global.$ = $;
global.slick = slick;

$(document).ready(function () {
    $('#top-slider-container').slick({
        dots: true,
        appendDots: $('#top-slider-container'),
        infinite: true,
        arrows: false
    });
});

$(document).ready(function () {
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
});