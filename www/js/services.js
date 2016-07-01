angular.module('starter.services', [])

.factory('News', function($http) {
  var apiKey = '5b40c9fbabab40b491f3e89d6c7f48a4';

  // var items = [{
  //   id: 0,
  //   title: 'News 1',
  //   content: 'With the new view caching in Ionic, Controllers are only called when they are recreated or on app start, instead of every page change To listen for when this page is active (for example, to refresh data), listen for the $ionicView.enter event:',
  //   img: 'img/adam.jpg'
  // }, {
  //   id: 1,
  //   title: 'News 2',
  //   content: 'With the new view caching in Ionic, Controllers are only called when they are recreated or on app start, instead of every page change To listen for when this page is active (for example, to refresh data), listen for the $ionicView.enter event:',
  //   img: 'img/ben.png'
  // }]

  return {
    all: function() {
      return $http.get('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/business/1.json', {params: {'api-key': apiKey}}); 
    },
    get: function(news) {
      return news;
    }
  };
})
