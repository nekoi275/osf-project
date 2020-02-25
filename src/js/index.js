import $ from 'jquery';
import Navigo from 'navigo';
import {initHomePage} from './homePage';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

global.jQuery = $;
global.$ = $;

$('head').append('<link rel="stylesheet" href="css/style.css"></link>');


/* let category = require('../templates/category.ejs');
let product = require('../templates/product.ejs');
let page404 = require('../templates/404.ejs');
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
}), popular(), benefits()].join(''); */

router.on(function () {
    initHomePage();
})
    .resolve(); 