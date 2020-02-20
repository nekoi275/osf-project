import $ from 'jquery';
import functions from './functions';

export default {
    initHandlers: function() {
        $('.dropdown-button').click((event) => {
            $(event.target).addClass('active');
            functions.toggleDropDown(event);
        });
        $(document.body).click((event) => {
            functions.toggleDropDown(event);
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
