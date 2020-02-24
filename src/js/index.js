import $ from 'jquery';
import slick from 'slick-carousel';
import handlers from './handlers';

global.jQuery = $;
global.$ = $;
global.slick = slick;

$('head').append('<link rel="stylesheet" href="css/style.css"></link>');

let main = require('../templates/main.ejs');
let top = require('../templates/top.ejs');
let banner = require('../templates/banner.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');
let featured = require('../templates/featured.ejs');
let category = require('../templates/category.ejs');
let product = require('../templates/product.ejs');
let page404 = require('../templates/404.ejs')
let homePage = [top(), popular(), banner(), featured(), benefits()].join('');
let categoryPage = [category({
    previousPageUrl: '#',
    previousPage: 'Home',
    currentPage: 'Category landing Services'
}), featured()].join('');
let productPage = [product({
    previousPage: 'OSF Theme',
    previousPageUrl: '#',
    firstPageUrl: '#',
    firstPage: 'Home',
    currentPage: 'Ruffle Front V-Neck Cardigan'
}), popular(), benefits()].join('');

$(document.body).html(main({ content: page404({
    previousPageUrl: '#',
    previousPage: 'Home',
    currentPage: '404'
}), year: new Date().getFullYear() }));

function init() {
    $('#top-slider-container').slick({
        dots: true,
        appendDots: $('#top-slider-container'),
        infinite: true,
        arrows: false
    });
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
    handlers.initHandlers();
}

$(document).ready(init);