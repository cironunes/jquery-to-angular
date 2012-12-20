'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('cartApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of products to the scope', function() {
    expect(scope.products.length).toBe(5);
  });

  it('should add an item in cart', function() {
    scope.addToCart(1);
    expect(scope.cart.length).toBe(1);
  });
});
