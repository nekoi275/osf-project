import $ from 'jquery';
import { initCommonHandlers, initProductHandlers } from '../handlers';
import { getProductTiles, addProductTiles } from '../productTile';
import helpers from '../helpers'

let product = require('../../templates/product.ejs');
let benefits = require('../../templates/benefits.ejs');
let popular = require('../../templates/popular.ejs');

function fitMaxLength(elem) {
    let maxLength = $(elem).attr('data-maxlength');
    let fullText = $(elem).text();
    let extraText = fullText.substring(maxLength);

    if (fullText.length > maxLength) {
        $(elem).text(fullText.substring(0, maxLength));
    }
    $(elem).next().text(extraText);
}

function initProductPage(onLoad) {
    let productPage = [product({
        previousPage: 'OSF Theme',
        previousPageUrl: 'osf-theme',
        firstPageUrl: '#',
        firstPage: 'Home',
        currentPage: 'Ruffle Front V-Neck Cardigan'
    }), popular(), benefits()].join('');
    helpers.showPage(productPage);
    getProductTiles('api/popular-products.json', productTiles => {
        addProductTiles(productTiles, $('.products-container'), false);
        onLoad();
    });
    initCommonHandlers();
    initProductHandlers();
    $('#popular').addClass('product-page-section');
    fitMaxLength($('p[data-maxlength]'));
}

export { initProductPage };