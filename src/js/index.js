import $ from 'jquery';
import Navigo from 'navigo';
import { initHomePage } from './homePage';
import { initCategoryLanding } from './categoryLanding';
import { notFoundHandler } from './404page';
import { initProductPage } from './product';

let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

global.jQuery = $;
global.$ = $;

$('head').append('<link rel="stylesheet" href="css/style.css"></link>');

router.on(function () {
    initHomePage();
    router.updatePageLinks();
})
    .resolve();
router.on('category-landing-services', () => {
    initCategoryLanding();
    router.updatePageLinks();
})
    .resolve();
router.on('product-detail', () => {
    initProductPage();
    router.updatePageLinks();
})
    .resolve();
router.notFound(() => {
    notFoundHandler();
    router.updatePageLinks();
});