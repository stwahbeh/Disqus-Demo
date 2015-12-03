var ACCESS_TOKEN = "d1a4145e953c4c4e9f0ee0c61c202486";
var API_KEY = "zFYDrRp7UkXfhX3xWuGaLQfi2T0hBjUeJLAszIKIC0RObnKclNc1yPkDGslOotqB";

// create angular app
var myApp = angular.module('myApp', []);


  // get list of threads in asc order

  // inside the div with id
  // create divs with id of thread's id
  // put title in h3
  // put author in
  // put content in 

  // get list of posts
  // create divs with content in p
  // attach them to threads with corresponding id

myApp.controller('myCtrl', function($scope, $http) {
  $scope.name = "stuff";
  $scope.posts = {};

  $http.get('https://disqus.com/api/3.0/forums/listPosts.json', {
      params: {
        access_token: ACCESS_TOKEN,
        api_key: API_KEY,
        forum: "youtatest1",
        order: "asc" } 
  }).success(function(response) {
    var data = response.response;
    console.log(data);
    $scope.posts = data;
  });
});
