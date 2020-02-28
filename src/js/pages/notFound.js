import helpers from '../helpers'

let page404 = require('../../templates/404.ejs');

function notFoundHandler(onLoad) {
    helpers.showPage(page404({
        previousPageUrl: '#',
        currentPage: '404',
        previousPage: 'Home',
    }));
    onLoad();
}

export { notFoundHandler };