angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope, $state, News) {
  News.all().success(function(response) {
    $scope.items = response.results;
  })
  $scope.listCanSwipe = true;

  $scope.detail = function(news) {
    $state.go('news-detail', {news: news});
  }
})

.controller('NewsDetailCtrl', function($scope, $stateParams, News) {
  $scope.item = $stateParams.news;

  $scope.$on( "$ionicView.enter", function( scopes, states ) {
    $scope.item = News.get($stateParams.news);

    $scope.readMore = function(url) {
      window.open(url, '_blank', 'location=yes');
    }
  });
})
