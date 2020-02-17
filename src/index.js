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