(function(){
'use strict';
var app = angular.module('soundGlomerate', []);

////////////////////////////////////////
//BELOW IS DUMMY DATA TO SET UP TESTING




//ABOVE IS DUMMY DATA TO SET UP TESTING
///////////////////////////////////////

// May not need this later
app.controller('NavBarController', function($scope){
  return $scope.obj = {
    fun: 'not fun'
  };
  
});




app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  $scope.master = {};
  // console.log("The datepicker: ", $('.datepicker'));

  // $('.datepicker').pickadate()


  // console.log('$scope', $scope);
  // console.log('this', this);
  $scope.apiCall = function(){
    $http({
      method: 'GET',
      datatype: 'JSON',
          // headers: {"Content-Type": "application/javascript"},
          url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=San+Francisco&venue.region=CA&token='

    }).success(function(data){
        var eventsArr = []; 
        
        for(var i = 0; data.events.length; i++){
          

          var container = {};
          container.name = data.events[i].name.text; 
          // container.description = data.events[i].description.text.slice(0,99);
          // container.timeStart = data.events[i].start.local;
          // container.timeEnd = data.events[i].end.local;
          eventsArr.push(container)
        }

        $scope.dataAPI = eventsArr;

      })
  };

  $scope.update = function(search) {
    $scope.master = angular.copy(search);
    // 
    console.log("Genre", search);
    console.log("Location", search.location);
    console.log("This is this", this.search);
    // Clear the search forms
    this.search = {};
    // console.log(search.genre);
    // console.log(date);
    $scope.apiCall();

  };



  
}]);

  app.controller('EventBriteDataController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'testing123';
  
    
    
  }]);

  // app.controller('EventFulDataController', ['$scope', '$http', function($scope, $http){
  //   $scope.test = 'testing456';
  //   $http({
  //     url: 'http://api.eventful.com/json/events/search?api_key=&keywords=books&location=San+Diego',
  //     method: 'JSONP',
  //     datatype: 'JSON',      
  //     headers: {"Content-Type": "application/json"}
  //   }).success(function(data){
  //     // $scope.dataAPI = data.events[0].name;
  //     console.log('EVENTFUL :',data);
  //   }).error(function(err){
  //     console.log ('error : ', err);
  //   })

  // }]);


//   var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

//     $scope.test = 'testing123';
// $http({
//     method:'JSONP',
//     url: nprUrl + '&apiKey=MDIwMzUyMDc5MDE0NDEwOTAyNDRkMGY4OQ001&callback=JSON_CALLBACK'}).success(function(data, status){
//       $scope.dataAPI = data.list.story;
//       console.log(data);

//     }).error(function(data, status){

//     });



})();
