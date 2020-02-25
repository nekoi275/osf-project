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
        let modal = $(event.target).data('modal-id');
        let action = $(event.target).data('modal');
        if (action == 'close') {
            $('.modal-container').removeClass('active');
        } else {
            $('#' + modal).addClass('active');
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
    },
    fitMaxLength: (elem) => {
        let maxLength = $('elem').attr('data-maxlength');
        let fullText = $('elem').text();
        let extraText = fullText.substring(maxLength);

        if (fullText.length > maxLength) {
            $(elem).text(fullText.substring(0, maxLength));
        }
        $((elem).attr('product-desc-text-rest')).text(extraText);
    },
    changeTab: (event) => {
        $('[data-tab]').removeClass('active');
        $('.tabs-content').removeClass('active');
        let currentTab = $('[data-tab-content=' + $(event.target).data('tab') + ']');

        $(event.target).addClass('active');
        currentTab.addClass('active');
    },
    increaseCount: (event, number) => {
        let countTarget = $('#' + $(event.target).data('count') + '-counter');
        let count = Number($(countTarget).text());
        if (number) {
            $(countTarget).text(count + number);
        } else {
            $(countTarget).text(++count);
        }
        localStorage.setItem($(event.target).data('count'), $(countTarget).text());
    },
    validateNumbers: (event) => {
        let numberVal = Number.isInteger(Number($(event.target).val()));
        if (!numberVal) {
            $(event.target).val('');
        }
    },
    changeInputNumber: (event) => {
        let action = $(event.target).data('input');
        let count = $('.quantity-value').val();
        if (action == 'increase') {
            $('.quantity-value').val(++ count);
        } else {
            $('.quantity-value').val(-- count);
        }
    }
}

