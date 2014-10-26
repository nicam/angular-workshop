var app = angular.module('store', []);

var products = [
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
    canPurchase: true, 
  },
  { 
    name: "I should not be shown", 
    price: 10000, 
    image: "",
    description: "NOPE NOPE NOPE NOPE NOPE", 
    canPurchase: false, 
  }
];
