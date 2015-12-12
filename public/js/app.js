'use strict';

var app=angular.module('FazanApp',[]);

app.controller('FazanController',['$scope','$http',function($scope,$http) {
var show='pg1';
$scope.show=show;
var connectTo='http://'+document.domain+":"+location.port;
var socketClient=io.connect()
//$scope.userName=userName;
var user={"name":$scope.userName}

$scope.register=function(gamePlay){
	user['gamePlay']=gamePlay;
	$http.post(' ',user)
      .then(function (data){
      			$scope.show=gamePlay;
            }, 

    		function(data){
      			console.log("eroare");
      			$scope.show=gamePlay;//TODO remove
            })

}

}])