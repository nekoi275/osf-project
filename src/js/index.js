import $ from 'jquery';
import slick from 'slick-carousel';
import * as handlers from './handlers';

global.jQuery = $;
global.$ = $;
global.slick = slick;

$(document).ready(() => {
    $('#top-slider-container').slick({
        dots: true,
        appendDots: $('#top-slider-container'),
        infinite: true,
        arrows: false
    });
});

$(document).ready(() => {
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

$(document).ready(() => {
    $('#copyright-year').html(new Date().getFullYear());
});