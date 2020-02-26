import $ from 'jquery';
import { initCommonHandlers, initProductTileHandlers } from './handlers';
import { getProductTiles } from './productTile';
import { initTopSlider, initFeaturedSlider } from './sliders';

let main = require('../templates/main.ejs');
let top = require('../templates/top.ejs');
let banner = require('../templates/banner.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');
let featured = require('../templates/featured.ejs');

function addProductTiles(productTiles) {
    $('.products-container').append(productTiles);
    initProductTileHandlers();
};

function initHomePage(afterInit) {
    let homePage = [top(), popular(), banner(), featured(), benefits()].join('');
    $(document.body).html(main({
        content: homePage,
        year: new Date().getFullYear(),
        wishlistCount: localStorage.getItem('wishlist') || 0,
        cartCount: localStorage.getItem('cart') || 0
    }));
    if (!localStorage.isCookiesAccepted) {
        setTimeout(() => { $('#cookies-message').addClass('active') }, 10000);
    }
    $('#load-more-button').click(() => {
        getProductTiles('api/products-page-2.json', productTiles => {
            addProductTiles(productTiles);
            afterInit();
        });
        $('#load-more-button').addClass('hidden');
    });
    initCommonHandlers();
    initTopSlider();
    initFeaturedSlider();
    $('#popular').removeClass('product-page-section');
    getProductTiles('api/products-page-1.json', productTiles => {
        addProductTiles(productTiles);
        afterInit();
    });
}

export { initHomePage };