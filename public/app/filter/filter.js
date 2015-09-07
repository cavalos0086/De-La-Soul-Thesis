angular.module('soundGlomerate.filter', ['soundGlomerate.results'])

.controller('FilterController', function ($scope, Filter) {
  $scope.genresEB = Filter.genresEB;
  $scope.checkedVal = {};

  
});

