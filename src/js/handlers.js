import $ from 'jquery';
import functions from './functions';

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