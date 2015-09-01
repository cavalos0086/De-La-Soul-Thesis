"use strict";
(function(){
var app = angular.module('soundGlomerate', []);

app.controller('NavBarController', function(){
  
});

app.controller('SearchController', ['$scope','$http', function($scope, $http) {
  $scope.master = {};
  console.log("The datepicker: ", $('.datepicker'));

  // $('.datepicker').pickadate()


  // console.log('$scope', $scope);
  // console.log('this', this);

  $scope.update = function(search) {
    $scope.master = angular.copy(search);
    

    $http.post('/home').then(function(data){
      console.log('************************************************************************');
      console.log('returned data', data);
    });

  };

  

  
}]);

})();