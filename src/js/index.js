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

router.on({
    '/': function () { initHomePage(() => { router.updatePageLinks() }) },
    'category-landing-services': function () { 
        initCategoryLanding(() => { router.updatePageLinks() }); 
    },
    'product-detail': function () { initProductPage(() => { router.updatePageLinks() }) },
}).resolve();

router.notFound(() => {
    notFoundHandler();
    router.updatePageLinks();
});