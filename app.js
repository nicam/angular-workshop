var app = angular.module('store', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products");
  $stateProvider
    .state('products', {
      url: "/products",
      templateUrl: "partials/store.html",
      controller: 'StoreController'
    })
    .state('checkout', {
      url: "/checkout",
      templateUrl: "partials/checkout.html",
      controller: 'CheckoutController'
    });
}]);

app.controller('NavigationController', ['$scope', '$rootScope', 'cartService', function ($scope, $rootScope, cartService) {
  $rootScope.$on('cartUpdate', updateCount);
  updateCount();

  function updateCount () {
    $scope.count = cartService.getSize();
  }
}]);

app.controller('StoreController', ['$scope', 'cartService', function ($scope, cartService) {
  $scope.products = [
    {
      name: "Dodecahedron",
      price: 2.95,
      image: "dodecahedron.png",
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      canPurchase: true
    },
    {
      name: "Trapezohedron",
      price: 5.95,
      image: "trapezohedron.png",
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      canPurchase: true
    },
    {
      name: "I should not be shown",
      price: 10000,
      image: "",
      description: "NOPE NOPE NOPE NOPE NOPE",
      canPurchase: false
    }
  ];

  $scope.addToCart = function (product) {
    cartService.addItem(product);
  };

}]);

app.controller('CheckoutController', ['$scope', 'cartService', function ($scope, cartService) {
  $scope.products = cartService.getItems();

  $scope.removeFromCart = function (index) {
    cartService.removeItem(index);
  };
}]);

app.filter('total', function () {
  return function (input) {
    var total = 0;
    angular.forEach(input, function (v, k) {
      total += v.price;
    });
    return total;
  }
});

app.directive('addToCart', ['cartService', function(cartService) {
  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    controller: ['$scope', '$element', function($scope, $element) {
        $scope.addToCart = function () {
          $element.addClass("btn-success");
          cartService.addItem($scope.product);
        };
    }],
    template: '<button class="btn" ng-click="addToCart()">Add {{ product.name }} to Cart</button>',
    replace: true
  };
}]);

app.service('cartService', ['$rootScope', function($rootScope) {
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
}]);
