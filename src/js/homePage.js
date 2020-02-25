import $ from 'jquery';
import {initCommonHandlers} from './handlers';
import slick from 'slick-carousel';

let main = require('../templates/main.ejs');
let top = require('../templates/top.ejs');
let banner = require('../templates/banner.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');
let featured = require('../templates/featured.ejs');
let homePage = [top(), popular(), banner(), featured(), benefits()].join('');

function initHomePage () {
    $(document.body).html(main({
        content: homePage, year: new Date().getFullYear()
    }));
    initCommonHandlers();
    if (!localStorage.isCookiesAccepted) {
        setTimeout(() => { $('#cookies-message').addClass('active') }, 10000);
    }
    $('#popular').removeClass('product-page-section');
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
}

export {initHomePage};