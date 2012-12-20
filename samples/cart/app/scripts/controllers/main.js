'use strict';

cartApp.controller('MainCtrl', function($scope) {
  $scope.products = [
    {id: 0, name: 'Ak-47', price: 30000, photo: 'images/ak.png'},
    {id: 1, name: 'Eagle', price: 1000, photo: 'images/gun.png'},
    {id: 2, name: 'Boat', price: 50000, photo: 'images/boat.png'},
    {id: 3, name: 'Airplane', price: 100000, photo: 'images/airplane.png'},
    {id: 4, name: 'Diamond', price: 1000000, photo: 'images/diamond.png'}
  ];

  $scope.cart = [];
  $scope.total = 0;

  $scope.addToCart = function(itemId) {
    // check if exist in cart
    for(var i in $scope.cart) {
      if($scope.cart[i].id === itemId) {
        $scope.cart[i].quantity += 1;
        $scope.updateTotal();
        return false;
      }
    }

    // find correct product
    // insert item with new attribute "quantity"
    // starts with quantity = 0
    $scope.products.forEach(function(val, i) {
      if(val.id === itemId) {
        $scope.cart.push({
          id: val.id,
          name: val.name,
          price: val.price,
          photo: val.photo,
          quantity: 1
        });
        $scope.updateTotal();
      }
    });
  };

  $scope.updateTotal = function() {
    var total = 0;
    $scope.cart.forEach(function(item, i) {
      total += item.quantity * item.price;
    });
    $scope.total = total;
  };
});
