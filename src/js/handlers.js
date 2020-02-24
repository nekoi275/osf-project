import $ from 'jquery';
import functions from './functions';

export default {
    initHandlers: function () {
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
        $('.gallery-small-image').click(functions.changeGalleryImage);
        $('#gallery-enlarge-button').click(functions.enlargeGalleryImage);
        $('[data-tab]').click((event) => {
            functions.changeTab(event);
        });
    }
}
