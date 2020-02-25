import $ from 'jquery';
import {initCommonHandlers} from './handlers';
import slick from 'slick-carousel';
import {getProductTiles} from './productTile';

let main = require('../templates/main.ejs');
let top = require('../templates/top.ejs');
let banner = require('../templates/banner.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');
let featured = require('../templates/featured.ejs');

function initHomePage () {
    let homePage = [top(), popular(), banner(), featured(), benefits()].join('');
    $(document.body).html(main({
        content: homePage, 
        year: new Date().getFullYear(),
        wishlistCount: localStorage.getItem('wishlist') || 0,
        cartCount: localStorage.getItem('cart') || 0
    }));
    getProductTiles('api/products-page-1.json', productTiles => {
        $('.products-container').append(productTiles);
        initCommonHandlers();
    });
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