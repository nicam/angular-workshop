describe('Filter: total', function() {
    var totalFilter;

    beforeEach(module('store'));
    beforeEach(inject(function($filter) {
        totalFilter = $filter('total');
    }));

    it('calculates correct totals', function() {
        expect(totalFilter([{price: 1}, {price: 2}, {price: 3}])).toEqual(6);
        expect(totalFilter([{price: 1}, {price: 2.45}, {price: 3.3}])).toEqual(6.75);
        expect(totalFilter([{price: 4}])).toEqual(4);
        expect(totalFilter([])).toEqual(0);
    });
});

describe('Directive: addToCart', function() {
    var $compile;
    var $rootScope;

    beforeEach(module('store'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        var element = $compile('<add-to-cart product="product"></add-to-cart>')($rootScope);

        expect(element.html()).toContain("Add to Cart");
    });
});
