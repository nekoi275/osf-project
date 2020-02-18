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
    }
}

