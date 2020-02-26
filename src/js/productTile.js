let productsTemplates = {
    button: require('../templates/tiles/product-button.ejs'),
    hover: require('../templates/tiles/product-hover.ejs')
};

function getProductTiles(link, onLoad) {
    fetch(link).then(response => {
        return response.json();
    }).then(json => {
        let result = json.map(product => {
            let template = productsTemplates[product.type];
            return template(product);
        }).join('');
        onLoad(result);
    })
};

function addProductTiles(productTiles, handlersFunction) {
    $('.products-container').append(productTiles);
    handlersFunction();
};

export { getProductTiles, addProductTiles };