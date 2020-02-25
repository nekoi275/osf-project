import $ from 'jquery';
import { initCommonHandlers } from './handlers';
import slick from 'slick-carousel';

let category = require('../templates/category.ejs');
let featured = require('../templates/featured.ejs');
let main = require('../templates/main.ejs');

function initCategoryLanding() {
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
    initCommonHandlers();
    if (!localStorage.isCookiesAccepted) {
        setTimeout(() => { $('#cookies-message').addClass('active') }, 10000);
    }
}

export { initCategoryLanding };