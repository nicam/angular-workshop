describe('add item to cart', function() {
  it('should add first item to the cart', function() {
    browser.get('http://localhost:8000');

    element.all(by.buttonText('Add to Cart')).get(0).click();

    element(by.css('[href$="/checkout"]')).click();

    element.all(by.repeater('product in products')).then(function(products) {
       var name = products[0].element(by.binding('product.name'));
       expect(name.getText()).toEqual('Dodecahedron');
    });

    expect(element(by.binding('products')).getText()).toEqual('Total cost ist $2.95');
  });
});
