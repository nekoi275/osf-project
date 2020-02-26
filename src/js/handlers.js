import $ from 'jquery';
import functions from './functions';

function initCommonHandlers() {
    $('.dropdown-button').click((event) => {
        functions.toggleMenu(event);
    });
    $('.dropdown-button,.dropdown').hover(functions.showMenu, (event) => {
        let mouseOutElem = $(event.relatedTarget);
        let isDropdown = (mouseOutElem.parents('.dropdown').length > 0)
            || (mouseOutElem.hasClass('dropdown'));
        if (!isDropdown) {
            functions.hideAllMenu(event);
        }
    });
    $(document.body).click((event) => {
        functions.toggleMenu(event);
    });
    $('#lang-dropdown ul li').click(functions.changeLanguage);
    $('#currency-dropdown ul li').click(functions.changeCurrency);
    $('[data-modal]').click(functions.toggleModal);
    $(document.body).keydown((event) => {
        if (event.key == 'Escape') {
            $('.modal-container').removeClass('active');
        }
    });
    $('.password-show').click(() => {
        functions.togglePass('#user-pass');
    });
    $('#cookies-accept-button').click(() => {
        localStorage.setItem('isCookiesAccepted', true);
    });
};

function initProductHandlers() {
    $('.gallery-small-image').click(functions.changeGalleryImage);
    $('#gallery-enlarge-button').click(functions.enlargeGalleryImage);
    $('[data-tab]').click((event) => {
        functions.changeTab(event);
    });
    $('.quantity-value').change((event) => {
        functions.validateNumbers(event);
    });
    $('[data-input]').click((event) => {
        functions.changeInputNumber(event);
    });
    $('.add-to-cart').click((event) => {
        functions.increaseCount(event, Number($('.quantity-value').val()));
    });
    $('.read-more').click(() => {
        $('#product-desc-text-rest').addClass('active');
        $('.read-more').addClass('hidden');
    });
};

function initProductTileHandlers() {
    $('.product-tile-hover-button').click((event) => {
        functions.increaseCount(event);
    });
    $('.product-tile-button').click((event) => {
        functions.increaseCount(event);
    });
};

export { initCommonHandlers, initProductHandlers, initProductTileHandlers }