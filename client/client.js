var app = angular.module('assignmentApp', []);

app.controller('StuffController', ['$scope','$http', function($scope, $http){
  $scope.message = "Students";
  $scope.assignments = [];
  $scope.assignment = {};
  $scope.getAssignments = function(){
    $http.get('/assignment/all').then(function(response){
      console.log(response);
      $scope.assignments = response.data;
    })
  }



  $scope.sendData = function(){
    $http.post('/assignment/add', $scope.assignment).then(function(response){
      console.log(response);
      $scope.assignment = {};
      $scope.getAssignments();
    })
  }
  window.setInterval($scope.getAssignments, 5000);


  $scope.getAssignments();

}]);
