import $ from 'jquery';
import { initCommonHandlers, initProductTileHandlers } from './handlers';
import { getProductTiles, addProductTiles } from './productTile';
import { initTopSlider, initFeaturedSlider, initPopularProductsSlider } from './sliders';

let main = require('../templates/main.ejs');
let top = require('../templates/top.ejs');
let banner = require('../templates/banner.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');
let featured = require('../templates/featured.ejs');

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
    initCommonHandlers();
    initTopSlider();
    initFeaturedSlider();
    $('#popular').removeClass('product-page-section');
    if ($(window).width() < 767) {
        getProductTiles('api/products-page-1.json', productTiles => {
            $('#popular-products-slider').html(productTiles);
            initPopularProductsSlider();
            afterInit();
        });
    } else {
        getProductTiles('api/products-page-1.json', productTiles => {
            addProductTiles(productTiles, initProductTileHandlers);
            afterInit();
        });
        $('#load-more-button').click(() => {
            getProductTiles('api/products-page-2.json', productTiles => {
                addProductTiles(productTiles, initProductTileHandlers);
                afterInit();
            });
            $('#load-more-button').addClass('hidden');
        });
    }
}

export { initHomePage };