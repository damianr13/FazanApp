'use strict'

var app=angular.module('FazanApp',[]);

app.controller('FazanController',['$scope','$http',function($scope,$http) {

 var user={"name":userName}
$scope.userName=userName;

$http.post(' ',user)
      .then(function (data){

            }, 

    		function(data){
      			console.log("eroare");
            })
}])