import $ from 'jquery';

export default {
    toggleDropDown: (event) => {
        let menuElem;
        let menuID = $(event.target).data('toggle');
        if (menuID) {
            menuElem = $('#' + menuID);
            menuElem.addClass('active');
        } else if ($(event.target).parents('.active').length == 0) {
            $('.dropdown-button').removeClass('active');
            $('.dropdown').removeClass('active');
        }
    },
    changeLanguage: (event) => {
        let activeLang = $(event.target).html();
        $('.lang[data-toggle="lang-dropdown"]').html(activeLang);
    },
    changeCurrency: (event) => {
        let activeCurrency = $(event.target).html();
        $('.lang[data-toggle="currency-dropdown"]').html(activeCurrency);
    },
    toggleModal: (event) => {
        let action = $(event.target).attr('data-modal');
        if (action == 'close') {
            $('.modal-container').removeClass('active');
        } else {
            $('.modal-container').addClass('active');
        }
    },
    togglePass: (passwordField) => {
        if ($(passwordField).attr('type') === 'password') {
            $(passwordField).attr('type', 'text');
        } else {
            $(passwordField).attr('type', 'password');
        }
    }
}

