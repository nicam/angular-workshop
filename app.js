var app = angular.module('store', []);

app.controller('StoreController', function () {
  console.log('blaa');
  this.products = [
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

  this.addToCart = function (product) {

  }

});
