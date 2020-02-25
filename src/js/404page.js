import $ from 'jquery';
import { initCommonHandlers } from './handlers';

let main = require('../templates/main.ejs');
let page404 = require('../templates/404.ejs');

function notFoundHandler() {
    $(document.body).html(main({
        content: page404({
            previousPageUrl: '#',
            currentPage: '404',
            previousPage: 'Home',
        }), year: new Date().getFullYear()
    }));
    initCommonHandlers();
}

export { notFoundHandler };