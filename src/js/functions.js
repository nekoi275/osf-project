import $ from 'jquery';

export default {
    toggleMenu: function (event) {
        if ($(event.target).parents('.active').length == 0) {
            this.hideAllMenu();
        }
        this.showMenu(event);
    },
    hideAllMenu: () => {
        $('.dropdown').removeClass('active');
        $('.dropdown-button').removeClass('active');
    },
    showMenu: (event) => {
        let menuID = $(event.target).data('toggle');
        if (menuID) {
            $('#' + menuID).addClass('active');
            $(event.target).addClass('active');
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
    },
    changeGalleryImage: (event) => {
        let bigImg = $('.gallery-big-image > img');
        $('.gallery-small-image').removeClass('active');
        $(event.target).addClass('active');
        $(bigImg).attr('src', $(event.target).attr('src'));
    },
    enlargeGalleryImage: () => {
        let currentImg = $('.gallery-big-image > img').attr('src');
        $('#gallery-modal > img').attr('src', currentImg);
        $('#gallery-modal').addClass('active');
    }
}

