describe('GameController', function() {
    beforeEach(module('myApp'));

    var $controller, $scope, controller;

  beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(function(){
    $scope = {};  
    controller = $controller('GameController', { $scope: $scope });
  });

  // it('should have bingo numbers', function() {
  //   expect($scope.bingo).toBeTruthy();
  //   expect($scope.bingo.bingoNumbers.B.length).toEqual(15);
  // });

});