import $ from 'jquery';
import { initCommonHandlers, initProductTileHandlers } from './handlers';
import { initFeaturedSlider } from './sliders';
import { getProductTiles, addProductTiles } from './productTile';

let category = require('../templates/category.ejs');
let featured = require('../templates/featured.ejs');
let main = require('../templates/main.ejs');

function initCategoryLanding(afterInit) {
    let categoryPage = [category({
        previousPageUrl: '#',
        previousPage: 'Home',
        currentPage: 'Category landing Services'
    }), featured()].join('');
    $(document.body).html(main({
        content: categoryPage,
        year: new Date().getFullYear(),
        wishlistCount: localStorage.getItem('wishlist') || 0,
        cartCount: localStorage.getItem('cart') || 0
    }));
    initCommonHandlers();
    $('#category-load-more-button').click(() => {
        getProductTiles('api/products-page-2.json', productTiles => {
            addProductTiles(productTiles, initProductTileHandlers);
            afterInit();
        });
        $('#category-load-more-button').addClass('hidden');
    });
    initFeaturedSlider();
    getProductTiles('api/products-category-page.json', productTiles => {
        addProductTiles(productTiles, initProductTileHandlers);
        afterInit();
    });
    if (!localStorage.isCookiesAccepted) {
        setTimeout(() => { $('#cookies-message').addClass('active') }, 10000);
    }
}

export { initCategoryLanding };