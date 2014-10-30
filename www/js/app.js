// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/*var app = angular.module('wppmc', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };
}*/

var app = angular.module('wppmc', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: 'index.html'
    })
    .state('audio', {
        url: '/audio',
        templateUrl: 'audio.html'
    })
    .state('imagem', {
        url: '/imagem',
        templateUrl: 'imagem.html'
    })
    .state('video', {
        url: '/video',
        templateUrl: 'video.html'
    })
    .state('galeria', {
        url: '/galeria',
        templateUrl: 'galeria.html'
    })

    $urlRouterProvider.otherwise("/");
})

.factory('MenuItemsFactory', function () {

    var menuItems = [];

    $.getJSON("js/data.json", {}, function(data) {
        for(i = 0; i < data.items.length; i++) {
          var menuItem = data.items[i];

          menuItems.push(menuItem);
        }
    });

    return {
        all: function () {
            return menuItems;
        },

        get: function (id) {
            return menuItems[id];
        }
    };
})

.controller('MainController', function($scope, $stateParams, MenuItemsFactory) {
    $scope.menuItems = MenuItemsFactory.all();
});
