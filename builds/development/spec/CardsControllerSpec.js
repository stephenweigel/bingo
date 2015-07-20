describe('CardsController', function() {
    beforeEach(module('myApp'));

    var $controller, $scope, controller;

  beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(function(){
    $scope = {};  
    controller = $controller('CardsController', { $scope: $scope });
  });

  // it('should have bingo numbers', function() {
  //   expect($scope.cards).toBeTruthy();
  //   expect($scope.cards.bingoNumbers.B.length).toEqual(15);
  // });

});