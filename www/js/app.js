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
    .state('image', {
        url: '/image',
        templateUrl: 'image.html'
    })
    .state('video', {
        url: '/video',
        templateUrl: 'video.html'
    })
    .state('galery', {
        url: '/galery',
        templateUrl: 'galery.html'
    })

    $urlRouterProvider.otherwise("/");
})

.controller("MainController", function($scope) {
    loadMenu();
})

.controller("AudioController", function($scope) {
    $scope.enviarAudio = function() {
		var intent = cordova.require("com.labofclouds.cordova.cordovaIntent.CordovaIntent");
        var file = $scope.file;

        intent.create(
            file, // file
            "sendAudio", // action
            function() {}, function(err) {
            alert(err);
        });
    };
});
