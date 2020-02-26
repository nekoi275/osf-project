import $ from 'jquery';
import { initCommonHandlers, initProductHandlers, initProductTileHandlers } from './handlers';
import { getProductTiles } from './productTile';

let product = require('../templates/product.ejs');
let main = require('../templates/main.ejs');
let benefits = require('../templates/benefits.ejs');
let popular = require('../templates/popular.ejs');

function fitMaxLength(elem, extraTextElem) {
    let maxLength = $(elem).attr('data-maxlength');
    let fullText = $(elem).text();
    let extraText = fullText.substring(maxLength);

    if (fullText.length > maxLength) {
        $(elem).text(fullText.substring(0, maxLength));
    }
    $(extraTextElem).text(extraText);
}

function initProductPage(afterInit) {
    let productPage = [product({
        previousPage: 'OSF Theme',
        previousPageUrl: 'osf-theme',
        firstPageUrl: '#',
        firstPage: 'Home',
        currentPage: 'Ruffle Front V-Neck Cardigan'
    }), popular(), benefits()].join('');
    $(document.body).html(main({
        content: productPage, 
        year: new Date().getFullYear(), 
        wishlistCount: localStorage.getItem('wishlist') || 0,
        cartCount: localStorage.getItem('cart') || 0
    }));
    getProductTiles('api/popular-products.json', productTiles => {
        $('.products-container').html(productTiles);
        initProductTileHandlers();
        afterInit();
    });
    initCommonHandlers();
    initProductHandlers();
    $('#popular').addClass('product-page-section');
    fitMaxLength($('p[data-maxlength]'), $('#product-desc-text-rest'));
}

export { initProductPage };