var app = angular.module('store', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products");

  $stateProvider
    .state('products', {
      url: "/products",
      templateUrl: "partials/store.html",
      controller: 'StoreController',
    })
    .state('checkout', {
      url: "/checkout",
      templateUrl: "partials/checkout.html",
      controller: 'CheckoutController',
    });
});

app.controller('NavigationController', function ($scope, $rootScope, cartService) {
  $rootScope.$on('cartUpdate', updateCount);
  updateCount();

  function updateCount () {
    $scope.count = cartService.getSize();
  }
});

app.controller('StoreController', function ($scope, $rootScope, cartService) {
  $scope.products = [
    {
      name: "Dodecahedron", 
      price: 2.95, 
      image: "dodecahedron.png",
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?", 
      canPurchase: true, 
    }, 
    { 
      name: "Trapezohedron", 
      price: 5.95, 
      image: "trapezohedron.png",
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?", 
      canPurchase: false, 
    }
  ];

  $scope.addToCart = function (product) {
    cartService.addItem(product);
  };

});

app.filter('total', function () {
  return function (input) {
    var total = 0;
    angular.forEach(input, function (v, k) {
      total += v.price;
    });
    return total;
  }
});

app.controller('CheckoutController', function ($scope, cartService) {
  $scope.getItems = cartService.getItems();

  $scope.removeFromCart = function (index) {
    cartService.removeItem(index);
  };
});

app.service('cartService', function($rootScope) {
  var cart = [];
  this.addItem = function(item) {
    cart.push(item);
    $rootScope.$emit('cartUpdate');
  };

  this.getItems = function () {
    return cart;
  };

  this.removeItem = function (index) {
    cart.splice(index, 1);
    $rootScope.$emit('cartUpdate');
  };

  this.getSize = function () {
    return cart.length;
  };
});