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

function switchToMobile() {
    if ($(window).width() < 767) {
        $('.desktop').addClass('hidden');
        $('.mobile').removeClass('hidden');
    } else {
        $('.desktop').removeClass('hidden');
        $('.mobile').addClass('hidden');
    }
}

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

$(document).ready(switchToMobile);
$(window).resize(switchToMobile);