import $ from 'jquery';
import functions from './functions';

export default {
    initHandlers: function () {
        $('.dropdown-button').click((event) => {
            functions.toggleMenu(event);
        });
        $('.dropdown-button').hover(functions.showMenu, (event) => {
            let mouseOutElem = $(event.relatedTarget);
            let isDropdown = (mouseOutElem.parents('.dropdown').length > 0)
                || (mouseOutElem.hasClass('dropdown'));
            if (!isDropdown) {
                functions.hideAllMenu(event)
            }
        });
        $(document.body).click((event) => {
            functions.toggleMenu(event);
        });
        $('#lang-dropdown ul li').click((event) => {
            functions.changeLanguage(event);
        });
        $('#currency-dropdown ul li').click((event) => {
            functions.changeCurrency(event);
        });
        $('[data-modal]').click((event) => {
            functions.toggleModal(event);
        });
        $(document.body).keydown((event) => {
            if (event.key == 'Escape') {
                $('.modal-container').removeClass('active');
            }
        });
        $('.password-show').click(() => {
            functions.togglePass('#user-pass');
        });
    }
}
